import {ApolloServer} from '@apollo/server'
import {USERS,TODOS} from '../user'
import usergql from './user/index'
import todogql from './todo/index'

export default async function createGraphQlServe(){
        
    const server= new ApolloServer({
        typeDefs:`
        ${usergql.typedefs}
        ${todogql.typedefs}
    
        type Query{
        ${usergql.query}
        ${todogql.query}
        }
        `,
        resolvers:{
            Todo:{
                ...usergql.resolvers.Todo,
            },
            Query:{
                ...usergql.resolvers.Query,
                ...todogql.resolvers.Query
    
            }
        }
    })
    
    // console.log(USERS[0])
    await server.start()
    
    return server
    }