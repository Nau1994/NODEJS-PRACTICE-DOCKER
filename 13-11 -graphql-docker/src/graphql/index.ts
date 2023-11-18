
import { ApolloServer } from "@apollo/server";
import messageGql from './message/index'
import helloGql from "./hello/index";

export const startGraphQlServe =async ()=>{
    const server=new ApolloServer({
        typeDefs:`
        ${messageGql.typedef}
        ${helloGql.typedef}
    
        type Query{
            ${messageGql.query}
            ${helloGql.query}
        }
        `,
        resolvers:{
            Query:{
                ...messageGql.resolver.Query,
                ...helloGql.resolver.Query
            }
        }
        })
    
        await server.start()

        return server
}