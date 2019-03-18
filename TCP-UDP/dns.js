const dns = require('dns');

dns.lookup('google.com', (err, address) => {
    if (err) throw err;
    console.log('IP address: ', address);
});

dns.resolve4('google.com', (err, address) => {
    if (err) throw err;
    console.log('IP address resolve4: ', address);
});

dns.resolve('google.com', 'MX', (err, address) => { // MX or A record or dns.resolveMX
    if (err) throw err;
    console.log('IP address resolve: ', address);
});

dns.reverse('172.217.17.46', (err, hostnames) => {
    if (err) throw err;
    console.log('IP address reverse: ', hostnames);
});