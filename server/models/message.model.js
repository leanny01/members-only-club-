import mongoose from 'mongoose'

messageSchema = ({
    message:{
        type:String,
        required:'message is required',

    },
    authorId:{
        type:String,
        required:'author\'s ID is required', 
    },
    created:{
        type:Date,
        default: Date.now()
    },
    updated:Date

})

export default mongoose.model('message',messageSchema)