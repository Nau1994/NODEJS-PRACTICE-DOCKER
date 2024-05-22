import express from 'express'
import mongoose from 'mongoose'
import {expressMiddleware } from'@apollo/server/express4'
import { createServer } from './graphql/createServer.mjs'


const app=express()

app.use(express.json())

app.use('/graphql',expressMiddleware(await createServer()))


app.listen(8080,()=>{
    console.log('server started')
    mongoose.connect("mongodb://127.0.0.1:27017/app?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5").then(()=>{
        console.log('mongoose connected')
    })
})