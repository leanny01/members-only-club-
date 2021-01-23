import Message from './../models/message.model' 
import _ from 'lodash'


/** 
 * Load message and append to req
 */
const messageById = (req,res,next,id)=>{

    Message.findById(id)exec((err,message)=>{

        if(err || !message)
            return res.status(400).json({
                error:'User not found'
            })
        req.message = message
        next()
    })

}

const create = (req,res,next)=>{
    const message = new Message(req.body)
    
    message.save((err, result)=>{
        if(err)
            return res.status(400).json({error:'Something went wrong, \n ',err})
        res.status(200).json({message:'message successfully created'})
    })
}

const update = (req,res,next)=>{
    let message =  req.message
    message = _.extend(message,req.body)
    message.updated = Date.now()
    message.save((err,result)=>{
        if(err)
            return res.status(400).json({error:'Error! Could not delete message, \n', err})
        res.status(200).json({message:'message successfully updated'})
    })
}

const remove = (req,res,next)=>{
    const message = req.message
    message.remove((err,deletedMessage)=>{
        if(err)
            return res.status(400).json({error:'Error! could not deleted message, \n',err})
        res.status(200).json({message:'Message successfully deleted'})     
    })  
}
const list = (req,res,next)=>{}