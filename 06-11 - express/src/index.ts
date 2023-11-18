import express from 'express'
import db from './db'
import userSkill from './modes/userSkill'
import skill from './modes/skill'
import routerUser from './routers/userRoute'
import routeUserSkill from './routers/userSkillRoute'
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user',routerUser)
app.use('/userSkill',routeUserSkill)

app.get('/',(req,res)=>{
    res.send({message:"isAlive succeed"})
})
app.listen(8080,()=>{
    db.then(()=>{console.log("mongoose connected")}).catch(err=>{console.log(err)})
    console.log("server listening on 8080")
})