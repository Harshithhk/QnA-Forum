import express from 'express'
const router = express.Router()
import {
    getQuestions,
    getQuestionById
} from '../controllers/questionController.js'


router.route('/').get(getQuestions)
router.route('/:id').get(getQuestionById)


export default router