import { USERS } from "../../user";
import { PrismaClient } from "@prisma/client";
const prismaClient=new PrismaClient()

export default {
    Query:{
        getAllUsers:async ()=>(await prismaClient.users.findMany()),
        getUserById:async (_:any,payload:{id:number})=>(await prismaClient.users.findUnique({where:{id:payload.id}}))
    },
    Mutation:{
        uploadAllUsers: async ()=>{
            for(let user of USERS){
                
                await prismaClient.users.create({
                    data:{id:user.id,
                        name:user.name,
                        username:user.username,
                        email:user.email,
                        website:user.website}
                })
            }

            return "ALL USERS UPLOADED!"
        }
    }
}