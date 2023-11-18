const {Kafka}=require('kafkajs')

exports.client= new Kafka({
    clientId:"kafka-app",
    brokers:["localhost:9092"]
})