const mongoose = require('mongoose')

messageSchema = ({
    message:{
        type:String,
        required:'message is required',

    },
    authorId:{
        type:String,
        required:'author\'s ID is required', 
    },
    authorFullName:{
        type:String,
        required:'author\'s name is required'
    },
    created:{
        type:Date,
        default: '-'
    },
    updated:Date

})

module.exports = mongoose.model('message',messageSchema)