import { TODOS } from "../../user";
import { PrismaClient } from "@prisma/client";
const todoPrismaClient=new PrismaClient()

export default {
    Query:{
        getAllTodos:async ()=>(await todoPrismaClient.todos.findMany()),
        getTodoById:async (_:any,payload:{id:number})=>(await todoPrismaClient.todos.findUnique({where:{id:payload.id}})),
        getTodoByIdQuery:async (_:any,payload:{id:number})=>{
            const result:any=await todoPrismaClient.$queryRaw`
            select * from todos where id=${payload.id};
            `
            return result
        }
    },
    Mutation:{
        uploadAllTodos: async ()=>{
            for(let todo of TODOS){
                
                await todoPrismaClient.todos.create({
                    data:{id:todo.id,
                        userId:todo.userId,
                        title:todo.title,
                        completed:todo.completed}
                })
            }

            return "ALL TODOS UPLOADED!"
        }
    },
    TODO:{
        user:async (todo:any)=>(await todoPrismaClient.users.findUnique({where:{id:Number(todo.userId)}}))
    }
}