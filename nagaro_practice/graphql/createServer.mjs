import {ApolloServer}  from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import {createUser,updateUser,deleteUser,findUser,findAllUser} from './../controller/users.js'
import {createTodo,updateTodo,deleteTodo,deleteUniqueTodo,findTodo,findAllTodo} from './../controller/todos.js'

export async function createApolloServer(){
    const server=new ApolloServer({
        typeDefs:`
        type USERINFO{
            user:USER
            _id:String
        }
        type USER{
            name:String
            age:Int
            dob:String!
        }

        type TODO{
            id:Int
            name:String
            tasks:[String]
        }

        type COUNT{
            id:Int
            count:Int
        }

        type Query{
            getAllUser:[USERINFO],
            getUser(userid:String):USERINFO,
            getAuth:String

            getAllTodo:[TODO],
            getTodo(TodoId:Int):TODO,
        }
        type Mutation{
            addUser(name:String,age:Int,dob:String):USERINFO
            addTodo(name:String,tasks:[String]):TODO
            updateTodo(id:Int!,name:String,tasks:[String]):COUNT
            removeTodo(TodoId:Int):COUNT,
            removeUniqueTodo(TodoId:Int):TODO,
        }
        `,
        resolvers:{

            Query:{
                getUser:async (_,payload)=>{return await findUser(payload.userid)},
                getAllUser:async ()=>{return await findAllUser()},
                getAuth:(_,payload,context)=>{return context.auth},

                getTodo:async (_,payload)=>{return await findTodo(payload.TodoId)},
                getAllTodo:async ()=>{return await findAllTodo()},
            },
            Mutation:{
                addUser:async (_,payload)=>{return await createUser({user:{...payload}})},
                addTodo:async (_,payload)=>{return await createTodo({...payload})},
                updateTodo:async (_,payload)=>{return {id:payload.id , ...await updateTodo({...payload})}},
                removeTodo:async (_,payload)=>{return {id:payload.TodoId , ...await deleteTodo(payload.TodoId)}},
                removeUniqueTodo:async (_,payload)=>{return await deleteUniqueTodo(payload.TodoId)},
            }
        }
    })

    // const {url}=await startStandaloneServer(server,{
    //     listen:{port:4200}
    // })

    // console.log('server runnin on ',url)

    await server.start()
    return server


}