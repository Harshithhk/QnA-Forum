import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import questions from './data/questions.js'
import replies from './data/replies.js'
import User from './models/userModel.js'
import Reply from './models/replyModel.js'
import Question from './models/questionModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async()=>{
    
    try{
        await User.deleteMany()
        await Question.deleteMany()
        
        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleQuestions = questions.map(question => {
            return{...question,user: adminUser}
        })
        await Question.insertMany(sampleQuestions)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    }
    catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}
// _______________________REPLY___________________

const importReplyData = async()=>{
    
    try{
        await Reply.deleteMany()
       
        // await Question.deleteMany()
        replies.map((reply)=>{
            
        })
        
       
        await Reply.insertMany(replies)

        console.log('Reply Data Imported!'.green.inverse)
        process.exit()
    }
    catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}


const destroyData = async()=>{
    try{
        await User.deleteMany()
        await Question.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    }
    catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] == "-d"){
    destroyData()
}
if(process.argv[2]== "-r"){
    importReplyData()
}
else{
    importData()
}