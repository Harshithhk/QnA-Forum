import express from 'express'
const router = express.Router()
import {
    getQuestions,
    getQuestionById,
    createQuestion,
    createQuestionImage,
    getQuestionImage
} from '../controllers/questionController.js'
import {protect} from '../middleware/authMiddleware.js'



router.route('/').get(getQuestions).post(protect,createQuestion)
router.route('/:id').get(getQuestionById)
router.route('/image/:questionId').post(protect,createQuestionImage)
router.route('/image/:name').get(getQuestionImage)


export default router