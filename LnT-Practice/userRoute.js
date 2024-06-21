const {Router}=require('express')
const userModel = require('./userModel')

const userRoute=new Router()

let userInfo=[
    {userid:1,name:"naushad",skill:"cloud"},
    {userid:2,name:"ansari",skill:"cloud"}
]

userRoute.post('/addUser',async (req,res)=>{
    userInfo.push(req.body)
    res.status(201).json("user added")
})

userRoute.post('/loadUser',async (req,res)=>{
    await userModel.create(userInfo.map(u=>({user:u})))
    res.status(201).json(userInfo)
})

userRoute.get('/getUser/:id',async (req,res)=>{
    console.log(req.params.id)
    res.json(await userModel.find().where({"user.userid":req.params.id}))
})

userRoute.get('/getAllUser',async (req,res)=>{
    res.json(await userModel.find())
})

exports.userRoute=userRoute
exports.userInfo=userInfo