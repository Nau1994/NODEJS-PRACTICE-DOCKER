
import {USERS,TODOS} from '../../user'

export default {
    Todo:{
        user:(todo:any)=> USERS.find((e)=>e.id===todo.userId) 
    },
    Query:{
        getUser:async (_:any,payload:{id:number})=>USERS.find((e)=>e.id===payload.id)

    }
}