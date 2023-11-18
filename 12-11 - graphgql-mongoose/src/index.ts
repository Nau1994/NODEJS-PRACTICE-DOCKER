import express from 'express'
import {expressMiddleware} from '@apollo/server/express4'
import createApolloServer from './graphQl'
import db from './mongoose/db'

async function createServer(){
    const app=express()
    app.use(express.json())

    app.use('/graphql',expressMiddleware(await createApolloServer()))
    
    
    app.use('/',(req,res)=>{
        res.send({
            message:"isalive runnig"
        })
    })
    
    app.listen(8080,()=>{
        db.then(()=>{console.log("mongo connected")}).catch(err=>{console.log(err)})
        console.log("app listening on 8080")
    })

}

createServer()

