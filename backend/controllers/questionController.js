import asyncHandler from 'express-async-handler'
import Question from '../models/questionModel.js' 

// @desc     Fetch all Questions
// @route    GET /api/questions
// @access   Public
const getQuestions =asyncHandler(async(req,res)=>{
    const question = await Question.find({})
    res.json(question)
})

// @desc     Fetch single Questions
// @route    GET /api/questions/:id
// @access   Public
const getQuestionById =asyncHandler(async(req,res)=>{
    const question = await Question.findById(req.params.id)

    if(question){
        res.json(question)
    } else {
        res.status(404).json({message : 'Question not found'})
    }
})

export{
    getQuestions,
    getQuestionById
}