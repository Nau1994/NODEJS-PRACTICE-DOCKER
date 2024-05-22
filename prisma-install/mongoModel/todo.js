const mongoose =require('mongoose')

const todoSchema=mongoose.Schema({
    todoName:{type:String}
})

const Todo=mongoose.model("todo",todoSchema);

const jobSchema=mongoose.Schema({
    jobName:{type:String},
    todoId:{type:mongoose.Schema.ObjectId,ref:Todo}
})

const Job=mongoose.model("job",jobSchema);

module.exports={
    Todo,
    Job
}

