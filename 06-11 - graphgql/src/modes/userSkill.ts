import mongoose from "mongoose";
import user from "./user";
import skill from "./skill";

const userSkillSchema= new mongoose.Schema({
    user:{type:mongoose.Schema.ObjectId,ref:user},
    skill:{type:mongoose.Schema.ObjectId,ref:skill}
})

export default mongoose.model("userSkill",userSkillSchema)