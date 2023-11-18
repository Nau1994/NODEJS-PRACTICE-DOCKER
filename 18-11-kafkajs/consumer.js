const {client}=require('./kafkaClient')
const group=process.argv[2]

async function consume(){
    const consumer=client.consumer({groupId:group})
    await consumer.connect()
    await consumer.subscribe({topics:["rider-route"],fromBeginning:true})

    await consumer.run({eachMessage:async ({topic,partition,message})=>{
        console.log(`[topic]:${topic},[partition]:${partition},[key]:${message.key},[message]:${message.value.toString()}`)
    }})
}

consume()