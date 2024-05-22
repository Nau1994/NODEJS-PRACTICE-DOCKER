const {PrismaClient} =require('@prisma/client')

const ranNum=Math.floor(Math.random()*1000)

const prismaClient=new PrismaClient()

async function addUser(req){  

const us= await prismaClient.users.create({data:{name:req.body.name,fileName:req.body.filename}})
return us
}

async function getUser(req){
    return await prismaClient.users.findUnique({where:{id:Number(req.params.id)}})
}

async function removeUser(req){
    return await prismaClient.users.delete({where:{id:Number(req.params.id)}})
    return await prismaClient.users.deleteMany({where:{fileName:{
        equals:""
    }}
})
}


module.exports={
    addUser,getUser,removeUser
}