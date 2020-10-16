import express from 'express'
import{
    getReplies,
    getRepliesById,
    createReply
} from '../controllers/replyController.js'
const router = express.Router()


router.route('/').get(getReplies)
router.route('/:id').get(getRepliesById)
router.route('/:id').post(createReply)

export default router