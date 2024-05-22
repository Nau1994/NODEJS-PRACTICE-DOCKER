const {Router} =require('express')
const fs=require('fs')
const route=new Router()
const {createUser,updateUser,deleteUser,findUser,findAllUser}=require('./../controller/users')
const getDirectoryInfo=require('./../readdirSync')

route.post('/getDirectoryInfo',async (req,res,next)=>{
    const directoryPath=req.body.directoryPath
    let level=req.body.level
    if(!fs.existsSync(directoryPath) ){
        res.send(`Directory path doesn't exists`,directoryPath)
    }else{
        //console.log(getDirectoryInfo(directoryPath))
        // fs.writeFileSync(path.join(__dirname,"file.json"),
        // JSON.stringify(getDirectoryInfo(directoryPath,level--), null, 4))

        const directoryInfo = getDirectoryInfo(directoryPath,level--);
        const jsonOutput = JSON.stringify(directoryInfo, null, 4);
        
        res.setHeader('Content-Disposition','attachment; filename=directory_info.json')
        res.setHeader('Content-Type', 'application/json');
        res.send(jsonOutput);
    }
})

route.post('/addUser',async (req,res,next)=>{
    res.send(await createUser(req.body))
})

route.delete('/removeUser/:id',async (req,res,next)=>{
    res.send(await deleteUser(req.params.id))
})

route.post('/updateUser',async (req,res,next)=>{
    res.send(await updateUser(req.body))
})

route.get('/getUser/:id',async (req,res,next)=>{
    res.send(await findUser(req.params.id))
})

route.get('/getAllUser',async (req,res,next)=>{
    res.send(await findAllUser())
})

route.get('/isalive',(req,res,next)=>{
    res.send({message:"isalive route"})
})

route.get('/',(req,res,next)=>{
    res.send({message:"hello from express"})
})

module.exports=route