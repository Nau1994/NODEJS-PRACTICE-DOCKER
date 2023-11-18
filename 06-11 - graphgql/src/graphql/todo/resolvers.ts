
import {USERS,TODOS} from '../../user'

export default {
    Query:{
        getTodo:async (_:any,payload:{id:number})=>TODOS.find((e)=>e.id===payload.id),
        getAllTodos:()=>TODOS

    }
}