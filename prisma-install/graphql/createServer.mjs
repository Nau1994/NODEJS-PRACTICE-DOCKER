import {ApolloServer} from '@apollo/server'
import users from '../t.js'
import {Todo} from '../mongoModel/todo.js'
import {PrismaClient} from '@prisma/client'
 
const prismaClient=new PrismaClient()

export async function createServer(){
    const server =new ApolloServer({
        typeDefs:`
        type TODO{
            todoName:String!
            id:String
        }
        type USER{
            name:String!
            id:Int
        }

        type Query{
            helloWorld:String
            getTodo(id:String):TODO
            getUser(id:Int):USER
        }
        type Mutation{
            addTodo(todoName:String):TODO
            removeTodo(id:String):TODO
            addUser(name:String):USER
            removeUser(id:Int):USER
        }
        `,
        resolvers:{
            Query:{
                helloWorld:async ()=>{ return "hello world"},
                getTodo:async (_,payload)=>{return await Todo.findOne({_id:payload.id})},

                getUser:async (_,payload)=>{return await prismaClient.users.findUnique({where:{id:Number(payload.id)}})}
            },
            Mutation:{
                addTodo:async (_,payload)=>{return await Todo.create({todoName:payload.todoName })},
                removeTodo:async (_,payload)=>{return await Todo.findOneAndDelete({_id:payload.id})},

                addUser:async (_,payload)=>{return await prismaClient.users.create({data:{name:payload.name}})},
                removeUser:async (_,payload)=>{return await prismaClient.users.delete({where:{id:Number(payload.id)}})}
            }
        }
    })

    console.log(users)

    await server.start()
    return server;
}



// exports.createServer=async ()=>{
//     const server =new ApolloServer({
//         typeDefs:`

//         type Query{
//             helloWorld:String
//         }
//         `,
//         resolvers:{
//             Query:{
//                 helloWorld:()=>{return 'hello world'}
//             }
//         }
//     })

//     await server.start()
//     return server;
// }
