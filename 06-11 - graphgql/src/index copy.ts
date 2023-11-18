import express from 'express'
// import db from './db'
// import userSkill from './modes/userSkill'
// import skill from './modes/skill'
// import routerUser from './routers/userRoute'
// import routeUserSkill from './routers/userSkillRoute'

import {ApolloServer} from '@apollo/server'
import {expressMiddleware} from '@apollo/server/express4'
import {USERS,TODOS} from './user'

async function createApolloServe(){
    
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const server= new ApolloServer({
    typeDefs:`
    type User{
        id:Int!,
        name:String!,
        email:String!,
        website:String!
    }

    type Todo{
        id:Int!
        title:String!
        user:User
    }

    type Query{
        getUser(id:Int!):User,
        getTodo(id:Int!):Todo,
        getAllTodos:[Todo]
    }
    `,
    resolvers:{
        Todo:{
        user:(todo)=> USERS.find((e)=>e.id===todo.userId) 
        },
        Query:{
            getUser:async (_,{id})=>USERS.find((e)=>e.id===id),
            getTodo:async (_,{id})=>TODOS.find((e)=>e.id===id),
            getAllTodos:()=>TODOS

        }
    }
})

// console.log(USERS[0])
await server.start()

app.use('/graphql',expressMiddleware(server))

app.get('/',(req,res)=>{
    res.send({message:"isAlive succeed"})
})
app.listen(8080,()=>{
    // db.then(()=>{console.log("mongoose connected")}).catch(err=>{console.log(err)})
    console.log("server listening on 8080")
})
}

createApolloServe()