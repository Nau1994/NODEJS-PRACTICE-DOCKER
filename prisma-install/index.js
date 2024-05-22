const express= require('express')
const multer=require('multer')
const moment =require('moment')
const path=require('path')
const mongoose = require('mongoose')
const {getUser,addUser,removeUser}=require('./services/pg')
const {getTodo,addTodo,removeTodo}=require('./services/mg')

const app=express()

app.use(express.json())

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{ cb(null,path.join(__dirname,'./uploads'))},
    filename:(req,file,cb)=>{ cb(null,file.originalname+"-"+moment().format('HHSSS'))}
})

const upload=multer({storage})


app.post('/addTodo',async (req,res,next)=>{

    res.json(
        {   message:"/ addTodo",
            addedTodo:await addTodo(req)
        }
        )
})

app.get('/getTodo/:id',async (req,res,next)=>{

    res.json(
        {   message:"/ getTodo",
            todo:await getTodo(req)
        }
        )
})

app.delete('/removeTodo/:id',async (req,res,next)=>{

    res.json(
        {   message:"/ removeTodo",
            removedTodo:await removeTodo(req)
        }
        )
})

app.post('/addUser',async (req,res,next)=>{

    res.json(
        {   message:"/ addUser",
            addedUser:await addUser(req)
        }
        )
})

app.get('/getUser/:id',async (req,res,next)=>{

    res.json(
        {   message:"/ getUser",
            user:await getUser(req)
        }
        )
})

app.delete('/removeUser/:id',async (req,res,next)=>{

    res.json(
        {   message:"/ removeUser",
            removedUser:await removeUser(req)
        }
        )
})

app.post('/fileUpload',upload.single("testFile"),(req,res,next)=>{
    res.json(
        {   message:"/ fileUpload",
            file:req.file
        }
        )
})

app.get('/getId/:id',(req,res,next)=>{
    res.json({message:"/ getId",
id:req.params.id})
})
app.get('/',(req,res,next)=>{
    res.json({message:"/ call"})
})


app.listen(8081,()=>{
    console.log('server started')
    mongoose.connect("mongodb://127.0.0.1:27017/app?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5").then(()=>{
        console.log('mongoose connected')
    })
})