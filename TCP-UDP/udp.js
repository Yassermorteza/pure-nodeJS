const dgram = require('dgram');

const PORT = 3333;
const HOST = '127.0.0.1';

// Server
const server = dgram.createSocket('udp4'); // or udp6 depends on type of the socket we need

server.on('listening', () => console.log('UDP Server listening.'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`); //every time it has a new port
});

server.bind(PORT, HOST);

// Client

const client = dgram.createSocket('udp4');

const msg = Buffer.from('Maloos rocks')

client.send(msg, 0, msg.length, PORT, HOST, err => { // 0 is where to start the buffer and msg.length  is where to end 
    if (err) throw err;

    console.log('UDP message sent');
    client.close();
})