import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    noOfReplies:{
        type:Number,
        required:true,
        default : 0
    },
    
},{
    timestamps: true
})

const Question = mongoose.model('Question', questionSchema)

export default Question