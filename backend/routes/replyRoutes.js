import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Reply from '../models/replyModel.js' 


// @desc     Fetch single Replies
// @route    GET /api/replies/:id
// @access   Public
router.get('/',async(req,res)=>{
    const reply = Reply.find({})
   
    res.send({
        user: 'SAMPLE',
        question:'SAMPLE',
        title: 'SAMPLE',
        description:'SAMPLE',
    })
})

router.get('/:id' ,asyncHandler(async(req,res)=>{
  
    const replies = await Reply.find({question: req.params.id})
    
    if(replies){
        res.json(replies)
    } else {
         res.json([])
    }
}))

router.post('/:id' ,asyncHandler(async(req,res)=>{

    const {description,title,question}=req.body
    const reply = new Reply({
        question,
        title,
        description})
    const replies = await reply.save()
    res.status(201).json(replies)
  
}))

export default router