



import { expressMiddleware } from '@apollo/server/express4'
import express from 'express'
import mongoose from 'mongoose';

import { createApolloServer } from "./graphql/createServer.mjs";
// createApolloServer()
import expressRoute from './expressRoute/app.js'

const app=express()
app.use(express.json())

app.use('/graphql',expressMiddleware(await createApolloServer(),{context:async ({req})=>{
    return {auth:req.headers['authorization']}
}}))

app.use('/',expressRoute)

app.listen(8080,()=>{
    console.log('express running at 8080')
    // mongoose.connect('mongodb://127.0.0.1:27017/app').then(()=>{
    //     console.log('mongoose connected!')
    // })
})

