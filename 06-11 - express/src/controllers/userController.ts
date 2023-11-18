import user from '../modes/user'

 const addUser =async (req:any,res:any,next:any)=>{
    const usr=new user({name:req.body.name})
    res.send(await usr.save())
}

 const getUsers =async (req:any,res:any,next:any)=>{
    const usr=await user.find()
    res.send({users:usr})
}

 const removeUserById =async (req:any,res:any,next:any)=>{
    const usr=await user.deleteOne({id:req.body.id})
    res.send({users:usr})
}

 const getUserById =async (req:any,res:any,next:any)=>{
    // const usr=await user.findOne({_id:req.body.id})
    const usr=await user.findById({_id:req.body.id})
    res.send({users:usr})
}

export default {addUser,getUsers,removeUserById,getUserById}