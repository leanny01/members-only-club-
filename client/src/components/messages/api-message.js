const message =()=>{}

const list = async()=>{
    try{
        const response = await fetch('api/messages',{
            method:'GET'
        })
        return  response.json()
    }catch(err){
        console.log(err)
    }
}
const update = ()=>{}
const delte = ()=>{}
const create = ()=>{}


export {list}