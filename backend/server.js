import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import cors from 'cors'

import questionRoutes from './routes/questionRoutes.js'
import replyRoutes from './routes/replyRoutes.js'
import userRoutes from './routes/userRoutes.js'

import bodyParser from 'body-parser'

dotenv.config()

const app = express()

app.use(bodyParser.json()) // for parsing application/json

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

connectDB()

app.get("/", (req,res)=>{
    res.send('HELLO FROM API')
})

app.use('/api/questions',questionRoutes)
app.use('/api/replies',replyRoutes)
app.use('/api/users',userRoutes)

const PORT = process.env.PORT || 5000



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.underline.bold))