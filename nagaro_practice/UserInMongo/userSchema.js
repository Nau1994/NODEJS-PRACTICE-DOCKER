const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    user:{type: mongoose.Schema.Types.Mixed}
})

module.exports=mongoose.model('user',userSchema)