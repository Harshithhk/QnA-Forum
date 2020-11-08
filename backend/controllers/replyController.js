import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import Question from '../models/questionModel.js'
import Reply from '../models/replyModel.js'
import User from '../models/userModel.js'

// @desc     Fetch all Replies
// @route    GET /api/replies/
// @access   Public
const getReplies = asyncHandler(async(req,res)=>{
    const reply = await  Reply.find({})
    res.json(reply)
})

// @desc     Fetch single or set Replies
// @route    GET /api/replies/:id
// @access   Public
const getRepliesById = asyncHandler(async(req,res)=>{

    var replies = await Reply.find({question:req.params.id})    
    if(replies){
        res.json(replies)
        // console.log(`idk${replies}`)
    } else {
        res.status(404)
    }
})

// @desc     Create single Reply
// @route    POST /api/replies/
// @access   Public
const createReply = asyncHandler(asyncHandler(async(req,res)=>{
    const {description,title,question,user}=req.body
    try{
    const questionToBeUpdated =await Question.findById(question)
        questionToBeUpdated.noOfReplies+=1
        await questionToBeUpdated.save()

    const reply = new Reply({
        question,
        title:title || "A:",
        user:req.user._id,
        userName:req.user.name,
        description})
    const replies = await reply.save()
    res.status(201).json(replies)
    }catch(err){
        res.send(err)
        console.log(err)
    }
  
}))

export{
    getReplies,
    getRepliesById,
    createReply
}