const http = require('http');

// for https request we have to change http to https

// req: http.ClientRequest
const req = http.request({
        hostname: 'www.google.com',
        method: 'GET'
    },
    (res) => {
        // res: http.IncomingMessage

        console.log('Response: ', res);
        console.log('Headers: ', res.headers);

        res.on('data', data => {
            console.log(data.toString());
        });
    }
);

// or with get method below it doesn't need req.end()
/*
const req = http.get(
    'HTTP://www.google.com',
    (res) => {
        console.log('Response: ', res);
        console.log('Headers: ', res.headers);

        res.on('data', data => {
            console.log(data.toString());
        });
    }
);
*/

req.on('error', err => console.log('Error', err));

console.log('HTTP Agent: ', req.agent); // http/Agent

req.end();