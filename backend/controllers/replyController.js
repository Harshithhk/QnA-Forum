import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import Reply from '../models/replyModel.js'

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

    const replies = await Reply.find({question:req.params.id})
    
    if(replies){
        res.json(replies)
    } else {
        res.status(404)
    }
})

// @desc     Create single Reply
// @route    POST /api/replies/
// @access   Public
const createReply = asyncHandler(asyncHandler(async(req,res)=>{
    const {description,title,question}=req.body
    const reply = new Reply({
        question,
        title,
        description})
    const replies = await reply.save()
    res.status(201).json(replies)
  
}))

export{
    getReplies,
    getRepliesById,
    createReply
}