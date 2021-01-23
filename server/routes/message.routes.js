import express from 'express'
import messageCtrl from '../controllers/message.controller'

const router = express.Router()

router.route('/messages')
    .get(messageCtrl.list)
    .post(messageCtrl.create)

router.route('/messages/:messageId')
    .get(messageCtrl.read)
    .put(messageCtrl.update)
    .delete(messageCtrl.remove)


router.param('messageId',messageCtrl.messageById)

export default router 