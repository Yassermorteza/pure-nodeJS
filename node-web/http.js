const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.write('Hello world\n');

    setTimeout(() => {
        res.write('Ain\'t gonna happen without setting server timout\n'); // curl: (18) transfer closed with outstanding read data remaining
    }, 120000);
});

server.timeout = 1000;

server.listen(4444, () => console.log('Server is running on port 4444'));


// curl -i localhost:4444
/*HTTP/1.1 200 OK
content-type: text/plain
Date: Sun, 17 Mar 2019 20:24:00 GMT
Connection: keep-alive  
Transfer-Encoding: chunked*/

// keep alive mean the server connection will be persisted. The TCP connection will not be killed after a requester receves a response, it's open for multiple request