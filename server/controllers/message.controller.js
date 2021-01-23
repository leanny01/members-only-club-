import Message from './../models/message.model' 


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
            return res.status(400).json({error:'Somthing went wrong, \n ',err})
        return res.status(200).json({message:'message successfully created'})
    })
}
const update = (req,res,next)=>{
    let message = {...req.message, req.body}
    
}
const delete = ()=>{}
const list = ()={}