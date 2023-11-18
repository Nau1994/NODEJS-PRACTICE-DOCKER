import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    id: Number!,
    name: String!,
    username: String!,
    email: String,
    website: String,
})

export default mongoose.model('users',userSchema)