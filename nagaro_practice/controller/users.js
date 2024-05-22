const User =require('./../UserInMongo/userSchema')
// const user=new User()

async function createUser(userdata){
    return await User.create(userdata)
}

async function updateUser(userdata){
    return await User.findOneAndUpdate({_id:userdata._id},userdata)
}

async function deleteUser(userId){
    return await User.findOneAndDelete({_id:userId})
}

async function findUser(userId){
    return await User.findOne({_id:userId})
}

async function findAllUser(){
    return await User.find()
}

module.exports={
    createUser,
    updateUser,
    deleteUser,
    findUser,
    findAllUser
}