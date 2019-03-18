const fs = require('fs');

// Asyncronous from: 
fs.readFile(__filename, (err, data) => {
    if (err) throw err;


});

// Synchronous from:
const data = fs.readFileSync(__filename)