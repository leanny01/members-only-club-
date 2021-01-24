const Message = require('./../models/message.model' )
const _ = require('lodash')


/** 
 * Load message and append to req
 */
exports.messageById = (req,res,next,id)=>{

    Message.findById(id).exec((err,message)=>{

        if(err || !message)
            return res.status(400).json({
                error:'User not found'
            })
        req.message = message
        next()
    })

}

exports.read = (req,res,next)=>{
    return req.json(message)
}
exports.create = (req,res,next)=>{
    const message = new Message(req.body)
    console.log(message)


    message.save((err, result)=>{
        console.log(err)
        if(err)
            console.log(err)
            return res.status(400).json({error:'Something went wrong, \n ',err})
        res.status(200).json(result)
    })
}

exports.update = (req,res,next)=>{
    let message =  req.message
    message = _.extend(message,req.body)
    message.updated = Date.now()
    message.save((err,result)=>{
        if(err)
            console.log(err)
            return res.status(400).json({error:'Error! Could not delete message, \n', err})
        res.status(200).json(result)
    })
}

exports.remove = (req,res,next)=>{
    const message = req.message
    message.remove((err,deletedMessage)=>{
        if(err)
            console.log(err)
            return res.status(400).json({error:'Error! could not deleted message, \n',err})
        res.status(200).json(deletedMessage)     
    })  
}
exports.list = (req,res)=>{
    Message.find((err,messages)=>{
        if(err)
            console.log(err)
            return res.status(400).json({error:'Something went wrong while retrieving messages'})
        res.status(200).json(messages)
    })
}


