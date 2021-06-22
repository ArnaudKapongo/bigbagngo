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
    const librairy = "placelibrairy";

    try{
    const conn = await amqp.connect(rabbitSettings);
    console.log("connecting in rabbit");

    const channel = await conn.createChannel();
    console.log("channel created...");
    
    const res = await channel.assertQueue(queue)
    console.log("Queue created...");

    console.log(`Waiting for un order from ${librairy}`);
    channel.consume(queue, messages => {
        let biblio = JSON.parse(messages.content.toString());
        console.log(`Received ${biblio.auteur}`);
        console.log(biblio);

        /*
        if(biblio.librairy == entreprise) {
            channel.ack(message);
            console.log("Delete message");
        } else {
            console.log("That ");
        }*/
    })

    }catch(err){
        console.error(`Error ${err}`);
    }
}