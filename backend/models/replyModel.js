import mongoose from 'mongoose'

const replySchema = mongoose.Schema({
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    // },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Question'
    },
    title:{
        type:String,
        required:true,
        default: "common"
    },
    description:{
        type:String,
        required:true
    },
    noOfLikes:{
        type:Number,
        required:true,
        default : 0
    },
    image:{
        type:String,
        default: ""
    }
    
},{
    timestamps: true
})

const Reply = mongoose.model('Reply', replySchema)

export default Reply