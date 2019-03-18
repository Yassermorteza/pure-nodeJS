process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();

let counter = 0;
let sockets = {};

function timestamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

server.on('connection', socket => {
    socket.id = counter++;
    // sockets[socket.id] = socket;
    console.log('Client connected');
    socket.write('Please type. your name: \n');

    socket.on('data', data => {
        // console.log('data is: ', data.toString());
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}!\n`);
            sockets[socket.id] = socket;
            return;
        }

        Object.entries(sockets).forEach(([key, cs]) => {
            if (socket.id == key) return; // to avoid sender receives the message
            cs.write(`${socket.name} ${timestamp()}: `);
            cs.write(data);
        });
        // socket.write(`${socket.id}: `);
        // socket.write(data);
    });

    socket.setEncoding('utf8');

    socket.on('end', () => {
        delete sockets[socket.id]; // to avoid crashing server one a client disconnect 
        console.log('Client disconnected');
    });
});

server.listen(4000, () => console.log('Server bound'));

// client: nc localhost 4000
//Windows client: telnet localhost 4000