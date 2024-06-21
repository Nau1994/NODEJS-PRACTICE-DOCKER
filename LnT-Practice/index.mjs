import express from 'express'
import { creatApolloServer } from './graphIndex.mjs'
import { expressMiddleware } from '@apollo/server/express4'
import mongoose from 'mongoose'
import { userRoute } from './userRoute.js'

const app=express()
app.use(express.json())


app.use('/graphql',expressMiddleware(await creatApolloServer()))

app.use('/user',userRoute)

app.use('/',(req,res)=>{
    res.send("server running!")
})

app.listen(8080,()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/app").then(()=>{
        console.log("mongoose connected")
    })
    console.log("server running at 8080!")
})