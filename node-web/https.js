// Http protocol over TLS/SSl

const http = require('https');
const fs = require('fs');

// man openssl : generate ssl certificate 
// openssl req -x509 -newkey rsa:4096 -keyout key.pm -out cert.pem -nodes
const server = http.createServer({
    key: fs.readFileSync('./key.pm'),
    cert: fs.readFileSync('./cert.pem'),
    // pfx:,
});

server.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.end('Hello world\n');
});

// 443 is default port for https communication
server.listen(443, () => console.log('Server is running on port 443'));

// sudo nodemon https // needs sudo to access port 443