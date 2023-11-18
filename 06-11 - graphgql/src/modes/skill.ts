import mongoose from "mongoose";

const skillSchema= new mongoose.Schema({
    name:String
})

export default mongoose.model("skill",skillSchema)