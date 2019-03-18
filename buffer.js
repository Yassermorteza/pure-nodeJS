// Buffer object
// A sequence of binary data
// useful to read any type of binary files like image, text ...

// node && Buffer
// Buffer.alloc(8)   to create a filled buffer of certain size
// Buffer.allocUnsafe(8) to create unfilled buffer
// Buffer.allocUnsafe(8).fill()   to fill the buffer
// Buffer.allocUnsafe(300).toString()  to read the buffer
// Buffer.from() 

const string = "touche";
const buffer = Buffer.from(string);

console.log(string, string.length);
console.log(buffer, buffer.length); // returns the actual number of bytes used

const fs = require('fs');

const conversionMap = {
    '88': '65',
    '89': '66',
    '90': '67',
};

fs.readFile(__filename, (err, buffer) => {
    console.log('__filename', __filename);
    let tag = buffer.slice(-4, -1);

    for (let i = 0; i < tag.length; i++) {
        tag[i] = conversionMap[tag[i]];
    }

    console.log(buffer.toString());
});

// TAG: XYZ