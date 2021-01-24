const  express = require('express')
const  messageCtrl = require('./../controllers/message.controller')

const router = express.Router()


router.route('/')
    .get(messageCtrl.list)
    .post(messageCtrl.create)

router.route('/:messageId')
    .get(messageCtrl.read)
    .put(messageCtrl.update)
    .delete(messageCtrl.remove)


router.param('messageId',messageCtrl.messageById)

//exports.default = router 

module.exports = router