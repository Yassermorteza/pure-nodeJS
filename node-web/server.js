const http = require('http');
const fs = require('fs');

// server: http.server
const server = http.createServer();

const data = {};

server.on('request', (req, res) => {
    // req: http.IncomingMessage
    // res: http.ServerResponse

    switch (req.url) {
        case '/':
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.end(fs.readFileSync('./index.html'));
            break;
        case '/home':
            res.writeHead(301, { // http.STATUS_CODES read status codes in terminal . 301 is move permanetly
                'location': '/home'
            });
            res.end();
            break;
        case '/api':
            res.writeHead(200, {
                'content-type': 'application/json'
            });
            res.end(JSON.stringify(data));
            break;
        case '/contact':
            res.writeHead(200, {
                'content-type': 'text/plain'
            });
            res.end('Contact page\n');
            break;
        default:
            res.writeHead(404, {
                'content-type': 'text/plain'
            });
            res.end('Page not found!!');

    }
});

server.listen(4000, () => console.log('Server is running on port 4000, '));