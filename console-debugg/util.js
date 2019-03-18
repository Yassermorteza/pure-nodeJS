const util = require('util');
const http = require('http');

const debuglog = util.debuglog('web');

const server = http.createServer();

server.on('reuqest', (req, res) => {
    debuglog('HTTP request: %s', req.url);
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.end('Hello world\n');
});

server.listen(5555, () => console.log('Server is running on port 5555.'));