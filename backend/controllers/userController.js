import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js' 
import Reply from '../models/replyModel.js'

// @desc     Auth user & get token
// @route    POST /api/users/login
// @access   Public
const authUser =asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    
    const user = await User.findOne({email:email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
            likes: user.likes,
            questionSubscriptions:user.questionSubscriptions,
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})


// @desc     Register a new user
// @route    POST /api/users
// @access   Public
const registerUser =asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body
    
    const userExists = await User.findOne({email:email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            user:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
            likes: user.likes,
            rating:user.rating,
            endorsments:user.endorsments,
            communityRatings:user.communityRatings,
            questionSubscriptions:user.questionSubscriptions,
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})



// @desc     GET user profile
// @route    GET /api/users/profile
// @access   Private
const getUserProfile =asyncHandler(async(req,res)=>{
    
   const user = await User.findById(req.user._id)

   if(user){
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        likes:user.likes,
        rating:user.rating,
        endorsments:user.endorsments,
        communityRatings:user.communityRatings,
        questionSubscriptions: user.questionSubscriptions,
    })
   }else{
       res.status(404)
       throw new Error('User not found')
   }
})


// @desc     Update user profile
// @route    PUT /api/users/profile
// @access   Private
const updateUserProfile =asyncHandler(async(req,res)=>{
    
    
   
//    console.log(`USER OF REPLY ${userOfReply}`)
   
   const user = await User.findById(req.user._id)

   if(user){

    // HANDLE LIKES
        if(req.body.likes && user.likes.length!=req.body.likes.length){
        await handleLikes(req,res,user)
        }

    // UPDATING USER
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        user.likes = req.body.likes || user.likes
        user.questionSubscriptions = req.body.questionSubscriptions || user.questionSubscriptions

        const updatedUser = await user.save()

        res.json({
            name : updatedUser.name,
            email : updatedUser.email,
            likes: updatedUser.likes
        })

   }else{
       res.status(404)
       throw new Error('User not found')
   }
})

const handleLikes=asyncHandler(async(req,res,user)=>{

    //HANDLING NO OF LIKES
    var replyData 
    try{
    replyData = await Reply.findById(req.body.replyId)
    }catch(err){
        console.log(err)
    }
    
    // HANDLING RATINGS
        const userOfReply = req.body.userOfReply
        if(user.likes.length>req.body.likes.length){
             console.log(`Decrement`)
             const userOfR = await User.findById(userOfReply)
             var updatedRating = userOfR.rating-1
            
            await User.findByIdAndUpdate({_id:userOfReply},{"rating":updatedRating})
            replyData.noOfLikes-=1
            await replyData.save()
        }else{
            console.log(`Incriment`)
            const userOfR = await User.findById(userOfReply)
             var updatedRating = userOfR.rating+1
            await User.findByIdAndUpdate({_id:userOfReply},{"rating":updatedRating})
            replyData.noOfLikes+=1
            await replyData.save()
        }
})


export{authUser,registerUser,getUserProfile,updateUserProfile}