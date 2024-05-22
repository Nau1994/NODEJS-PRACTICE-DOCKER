const {Todo,Job}=require('../mongoModel/todo')

    async function addTodo(req){  

    const td= await Todo.create({
        todoName:req.body.todoName
    })
    return td
    }
    
    async function getTodo(req){
        return await Todo.findOne({_id:req.params.id})
    }
    
    async function removeTodo(req){
        return await Todo.findOneAndDelete({_id:req.params.id})
    }
    
    
    module.exports={
        addTodo,getTodo,removeTodo
    }