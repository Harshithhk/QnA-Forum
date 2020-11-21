import asyncHandler from 'express-async-handler'
import Question from '../models/questionModel.js' 
import User from '../models/userModel.js'

import fileUpload from 'express-fileupload' 
import path from 'path'

// @desc     Fetch all Questions
// @route    GET /api/questions
// @access   Public
const getQuestions =asyncHandler(async(req,res)=>{
    var question = await Question.find({})
    const filteredQuestion =  question.filter((q)=>{
        var temp = q;
        if(temp.anonymous == true){
            temp.user = "kjdhsfksdjfh"
        }
        return temp
    })
    res.json(filteredQuestion)
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
    let user = await User.findById(req.user._id) 
    const question = await Question.create({
        user:user._id,
        title:req.body.title,
        description: req.body.description
    })
    user.questions.push(question._id)
    await user.save()
    res.send({questionId:question._id})

    }catch(err){
        res.status(400)
        console.log(err)
    }
})

const createQuestionImage =asyncHandler(async(req,res)=>{
     console.log("IMAGES")
    //  console.log(req.params)
    try{
        if(!req.files){
            res.send({
                status:false,
                message: "No files"
            })
        }else{
           
            const {picture} = req.files
            // console.log(picture)
            var date = new Date()
            var imageName =  date.getDate() + date.getTime() + picture.name
            // console.log(imageName)
            picture.mv('./uploads/' + imageName)
            await Question.findByIdAndUpdate({_id:req.params.questionId},{"image":`http://localhost:5000/api/questions/image/${imageName}`})
            res.send({
                status: true,
                message :'File is uploaded',
                imgurl: `http://localhost:5000/api/questions/image/${imageName}`
            })
        
        }
    }catch(e){
        res.status(500).send(e)
    }
})

const getQuestionImage =asyncHandler(async(req,res)=>{
    var absolutePath = path.resolve(`./uploads/${req.params.name}`)
    // console.log(req.params)
    // res.static(`/uploads/${req.params.name}`)
    res.sendFile(absolutePath)
})




export{
    getQuestions,
    getQuestionById,
    createQuestion,
    createQuestionImage,
    getQuestionImage
}