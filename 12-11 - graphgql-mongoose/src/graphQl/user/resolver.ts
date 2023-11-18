import user from "../../model/user";
import { USERS } from "../../user";

export default {
    Query:{
        getAllUser:async ()=>await user.find(),
        getUserById:async (_:any,payload:{id:number})=>{
            return (await user.findOne({id:payload.id}))
        }
    },
    Mutation:{
        loadAllUser:async ()=>{
            for(let usr of USERS){
                let userModel =new user(usr)
                await userModel.save()
            }

            return "USERS LOADED"
        }
    }
}