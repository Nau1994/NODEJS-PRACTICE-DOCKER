
import {ApolloServer} from '@apollo/server'
import hello from './hello'
import user from './user'
import todo from './todo'
import usermodel from '../model/user'

export default async function createApolloServer() {

    const server=new ApolloServer({
        typeDefs:`
        ${hello.typedef}
        ${user.typedef}
        ${todo.typedef}

        type Query{
            ${hello.query}
            ${user.query}
            ${todo.query}
        }
        type Mutation{
            ${user.mutation}
            ${todo.mutation}
        }
        `,
        resolvers:{
            TODO:{
                ...todo.resolver.TODO
            },
            Query:{
                ...hello.resolver.Query,
                ...user.resolver.Query,
                ...todo.resolver.Query
            },
            Mutation:{
                ...user.resolver.Mutation,
                ...todo.resolver.Mutation
            }
        }
    })
    
    await server.start()

    return server
    
}