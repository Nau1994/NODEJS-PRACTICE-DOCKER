import express from 'express'
import { ApolloServer } from '@apollo/server'
import {expressMiddleware} from '@apollo/server/express4'
import createApolloServer from './graphql'

async function createServer() {
    
const app=express()

app.use(express.json())

//apollo server


app.use('/graphql',expressMiddleware(await createApolloServer()))

app.use('/',(req,res)=>{
    res.send({
        "message":"isalive endpoint running"
    })
})

app.listen(8080,()=>{
    console.log("server running on 8080")
})
    
}

createServer()