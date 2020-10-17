import express from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import connectDB from './config/db.js'
import colors from 'colors'
import cors from 'cors'

import questionRoutes from './routes/questionRoutes.js'
import replyRoutes from './routes/replyRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {tokenValidation} from './controllers/authController.js'

import bodyParser from 'body-parser'
import User from './models/userModel.js'

dotenv.config()

const app = express()

app.use(bodyParser.json()) // for parsing application/json

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

connectDB()

app.get("/", (req,res)=>{
    res.send('HELLO FROM API')
})

app.post("/tokenIsValid",async(req,res)=>{
    console.log("DEBUG")
    try{
    var token = req.header("authorization");
    if(!token) return res.json(false);
    token = token.split(' ')[1]

    const verified = jwt.verify(token,process.env.JWT_SECRET)
    if(!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if(!user) return res.json(false);

    return res.json(true);
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

app.use('/api/questions',questionRoutes)
app.use('/api/replies',replyRoutes)
app.use('/api/users',userRoutes)

const PORT = process.env.PORT || 5000



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.underline.bold))