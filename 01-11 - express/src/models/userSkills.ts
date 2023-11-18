import mongoose from "mongoose";
import user from "./user";
import skills from "./skills";
const userSkillSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.ObjectId,ref:user},
    skill:{type:mongoose.Schema.ObjectId,ref:skills}
})

export default mongoose.model('user-skill',userSkillSchema)