const fs = require('fs');
const path = require('path');


// Asyncronous from: 
fs.readFile(__filename, (err, data) => { // for example: reading a file every time a user requests something from server 
    if (err) throw err;


});

// Synchronous from:
const data = fs.readFileSync(__filename); // for example: read file during server initialiyation process

// __________________________________________________________________________________________________________

const dirname = path.join(__dirname, 'file');

const files = fs.readdirSync(dirname);

files.forEach(file => {
    const filePath = path.join(dirname, file); // Always use path.join when working with files path to make your code platform-agnostic.
    fs.stat(filePath, (err, stats) => { // stat gives only the meta information about the file
        if (err) throw err;

        fs.truncate(filePath, stats.size / 2, (err) => {
            if (err) throw err;

        });
    });
});

// more file.js   // reading file in terminal