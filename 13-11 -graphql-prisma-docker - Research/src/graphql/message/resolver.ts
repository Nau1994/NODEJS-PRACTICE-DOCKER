export default {
    Query:{
        helloMessage:()=>({msg:`Message from graphql ,environment:${process.env.ENV}`,val:2})
    }
}