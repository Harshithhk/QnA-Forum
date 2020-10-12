import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
     isModerator:{
        type:Boolean,
        required:true,
        default : false
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default : false
    },
    rating:{
        type:Number,
        required:true,
    }   
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User