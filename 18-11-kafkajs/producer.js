const { stdin, stdout } = require('process')
const {client}=require('./kafkaClient')
const readline = require('readline')

const rl=readline.createInterface({
    input:stdin,
    output:stdout
})

async function produce(){
    const producer=client.producer()
    await producer.connect()

    rl.setPrompt("> ")
    rl.prompt()
    rl.on("line",async (line)=>{
        const [name,location]=line.split(" ");

        let pr=await producer.send({
            topic:"rider-route",
            messages:[{
                partition:location.toUpperCase()==="NORTH"?0:1,
                key:"location update",
                value:JSON.stringify({name,location})
            }]
        })

        console.log("pr",pr)

    }).on("close",async ()=>{
        await producer.disconnect()
    })

}

produce()