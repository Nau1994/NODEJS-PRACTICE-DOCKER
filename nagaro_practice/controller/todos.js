const {PrismaClient} =require('@prisma/client')
const client=new PrismaClient()

async function createTodo(todoData){
    return await client.Todo.create({
        data:{...todoData}
    })
}

async function updateTodo(todoData){
    return await client.Todo.updateMany({where:{
        id:todoData.id
    },data:{
        ...todoData
    }})
}

async function deleteTodo(TodoId){
    return await client.Todo.deleteMany({where:{
        id:TodoId
    }})
    
}

async function deleteUniqueTodo(TodoId){

    return await client.Todo.delete({where:{
        id:TodoId
    }})
}

async function findTodo(TodoId){
    return await client.Todo.findUnique({where:{
        id:TodoId
    }})
}

async function findAllTodo(){
    return await client.Todo.findMany()
}

module.exports={
    createTodo,
    updateTodo,
    deleteTodo,
    deleteUniqueTodo,
    findTodo,
    findAllTodo
}