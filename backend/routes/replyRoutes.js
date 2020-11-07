import express from 'express'
import{
    getReplies,
    getRepliesById,
    createReply
} from '../controllers/replyController.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router()


router.route('/').get(getReplies).post(protect,createReply)
router.route('/:id').get(getRepliesById)
router.route('/:id').post(createReply)

export default router