
import {ApolloServer} from '@apollo/server'
import users from './users'
import todos from './todos'
export default async () => {
    const server=new ApolloServer({
        typeDefs:`
        ${users.typedef}
        ${todos.typedef}
    
        type Query{
            ${users.query}
            ${todos.query}
        }

        type Mutation{
            ${users.mutation}
            ${todos.mutation}
        }
        `,
        resolvers:{
            TODO:{
                ...todos.resolver.TODO
            },
            Query:{
                ...users.resolver.Query,
                ...todos.resolver.Query
            },
            Mutation:{
                ...users.resolver.Mutation,
                ...todos.resolver.Mutation
            }
        }
    })
    
    await server.start()
    return server
}