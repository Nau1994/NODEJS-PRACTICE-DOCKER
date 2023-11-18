import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    userId: Number,
    id: Number,
    title: String,
    completed: Boolean
})

export default mongoose.model('todos',userSchema)