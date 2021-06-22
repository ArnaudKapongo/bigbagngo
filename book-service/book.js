const amqp = require("amqplib");

const rabbitSettings = {
    protocol: 'amqp',
    hostname: 'localhost',
    port: 5672,
    username: 'arno',
    password: 'user',
    vhost: '/',
    authMechanism: ['PLAIN', 'AMQPLAIN', 'EXTERNAL']
}

connect();
async function connect() {

    const queue = "book";

    const msgs = [
        {"name":"Don Quichotte", "auteur": "Miguel de Cervantes"},
        {"name":"Le Père Goriot", "auteur": "Honoré de Balzac"}
    ]

    try{
    const conn = await amqp.connect(rabbitSettings);
    console.log("connecting in rabbit");

    const channel = await conn.createChannel();
    console.log("channel created...");
    
    const res = await channel.assertQueue(queue)
    console.log("Queue created...");

    for(let msg in msgs) {
        await channel.sendToQueue(queue, Buffer.from(JSON.stringify(msgs[msg])));
        console.log(`Message sent to queue ${queue}`);
    }


    }catch(err){
        console.error(`Error ${err}`);
    }
}