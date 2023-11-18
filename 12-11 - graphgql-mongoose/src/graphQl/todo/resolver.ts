import todoType from "../../Type/todo";
import todo from "../../model/todo";
import user from "../../model/user";
import { TODOS } from "../../user";

export default {
    TODO:{
        user:async (todo:todoType)=>await user.findOne({id:todo.userId}),
    },
    Query:{
        getAllTodo:async ()=>await todo.find(),
        getTodoById:async (_:any,payload:{id:number})=>{
            return (await todo.findOne({id:payload.id}))
        }
    },
    Mutation:{
        loadAllTodo:async ()=>{
            for(let tod of TODOS){
                let todoModel =new todo(tod)
                await todoModel.save()
            }

            return "TODOS LOADED"
        }
    }
}