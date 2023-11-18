const {client}=require('./kafkaClient')

async function createTopic(){
    const admin=client.admin()
    admin.connect()
    console.log("creating topic")
    console.log(`before topic admin: ${JSON.stringify(admin)}`)
    await admin.createTopics({
        topics:[
            {
                topic:"rider-route",
                numPartitions:2
            }
        ]
    })

    console.log(`after topic admin: ${JSON.stringify(admin)}`)

    await admin.disconnect()
}

async function deleteTopic(){
    const admin=client.admin()
    admin.connect()
    console.log("creating topic")
    console.log(`before topic delete admin: ${JSON.stringify(admin)}`)

    await admin.deleteTopics({
        topics:["rider-route"]
    })

    console.log(`after topic delete admin: ${JSON.stringify(admin)}`)

    await admin.disconnect()
}

createTopic()