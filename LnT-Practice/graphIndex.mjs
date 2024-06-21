import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { userInfo } from "./userRoute.js";
export async function creatApolloServer(){

    const apolloServer=new ApolloServer({
        typeDefs:`
        type USER {
            id:Int,
            name:String,
            skill:String
        }
        
        type Query {
            getAllUser:[USER]
        }
        
        type Mutation {
            addUser(userId:Int,name:String,skill:String):String
        }
        `,
        resolvers:{
            Query:{
            getAllUser:()=>userInfo
        },
        Mutation:{
            addUser:(_,payload)=>{
                userInfo.push({
                    id:payload.userId,
                    name:payload.name,
                    skill:payload.skill
                })

                return (`user added!`)
            }
        }

    }
})

// startStandaloneServer(apolloServer,{
//     listen:{
//         port:3000
//     }
// })

await apolloServer.start()
return apolloServer
}