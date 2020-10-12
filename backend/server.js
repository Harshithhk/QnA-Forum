import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import cors from 'cors'

import questionRoutes from './routes/questionRoutes.js'

const app = express()

dotenv.config()
app.use(cors())

connectDB()

app.get("/", (req,res)=>{
    res.send('HELLO FROM API')
})

app.use('/api/questions',questionRoutes)

const PORT = process.env.PORT || 5000



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.underline.bold))