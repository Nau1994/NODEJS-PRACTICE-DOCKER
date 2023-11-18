import express from "express"
const routeUserSkill=express.Router()

import userSkill from '../modes/userSkill'
import user from '../modes/user'
import skill from '../modes/skill'

routeUserSkill.post('/addUserSkill',async (req,res,next)=>{
    const usr=await (new user({name:req.body.user})).save()
    const skl=await (new skill({name:req.body.skill})).save()
    const usrSkill=new userSkill({user:usr.id,skill:skl.id})
    res.send(await usrSkill.save())
})

routeUserSkill.get('/getUsersSkill',async (req,res,next)=>{
    const usrSkill=await userSkill.find()
    res.send({usersSkill:usrSkill})
})

routeUserSkill.delete('/removeUserSkillById',async (req,res,next)=>{
    const usrSkill=await userSkill.deleteOne({_id:req.body.id})
    res.send({usersSkill:usrSkill})
})

routeUserSkill.get('/getUserSkillById',async (req,res,next)=>{
    const usrskill=await userSkill.findOne({_id:req.body.id})
    // const usrskill=await userSkill.findById({_id:req.body.id})
    res.send({usersSkill:usrskill})
})

export default routeUserSkill