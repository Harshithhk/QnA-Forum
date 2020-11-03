import mongoose from 'mongoose'
import bcrypt from  'bcryptjs'
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
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
        default: 0
    },
    likes:{
        type:[mongoose.Schema.Types.ObjectId],
        required:true,
        default: 0
    },
    questionSubscriptions:{
        type:[String],
        required:true,
        default:[]
    }   
},{
    timestamps: true
})

userSchema.methods.matchPassword = async function(enteredPasswrod){
    return await bcrypt.compare(enteredPasswrod, this.password)
}

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password =await bcrypt.hash(this.password,salt)
})

const User = mongoose.model('User', userSchema)

export default User