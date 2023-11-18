import express from 'express'
import db from './mongoDb/db'
import User from './models/user'
import Skills from './models/skills'
import userSkills from './models/userSkills'

const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/addUser',async (req,res,next)=>{
    const user = new User({
        name:req.body.name
    })
    const savedUser=await user.save()
    res.send(savedUser)
})

app.post('/addSkill',async (req,res,next)=>{
    const skill= new Skills({
        name:req.body.name
    })
    const savedSkill=await skill.save()
    res.send(savedSkill)
})

app.post('/addUserSkill',async (req,res,next)=>{
    const user = new User({
        name:req.body.user
    })
    const savedUser=await user.save()

    const skill= new Skills({
        name:req.body.skill
    })
    const savedSkill=await skill.save()

    const userSkill=new userSkills({
        user:savedUser.id,
        skill:savedSkill.id
    })

    res.send(await userSkill.save())

})

app.get('/getUser',async(req,res,next)=>{
    res.send(await User.findById({_id:req.body.id}))
})

app.get('/',(req,res)=>{
    res.send(req.body)
})

app.listen(8080,()=>{
    db.then(()=>{console.log("db connected")})
    console.log("app listening on 8080:")
})