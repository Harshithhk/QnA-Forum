import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Question from '../models/questionModel.js' 

// @desc     Fetch all Questions
// @route    GET /api/questions
// @access   Public

router.get('/',asyncHandler(async(req,res)=>{
    const question = await Question.find({})
    res.json(question)
}))


// @desc     Fetch single Questions
// @route    GET /api/questions/:id
// @access   Public

router.get('/:id' ,asyncHandler(async(req,res)=>{
    const question = await Question.findById(req.params.id)
    if(question){
        res.json(question)
    } else {
        res.status(404).json({message : 'product not found'})
    }
}))

export default router