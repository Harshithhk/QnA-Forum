import asyncHandler from 'express-async-handler'
import Question from '../models/questionModel.js' 
import User from '../models/userModel.js'

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

// @desc     Fetch single Questions
// @route    GET /api/questions/:id
// @access   Public
const createQuestion =asyncHandler(async(req,res)=>{
    
    // const question = await Question.findById(req.params.id)
    try{
    const user = await User.findById(req.user._id) 
    const question = await Question.create({
        user:user._id,
        title:req.body.title,
        description: req.body.description
    })
    res.send(200)

    }catch(err){
        res.status(400)
        console.log(err)
    }
})



export{
    getQuestions,
    getQuestionById,
    createQuestion
}