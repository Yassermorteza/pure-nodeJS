const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        const buffer = Buffer.from([chunk]);
        console.log('With .toString(): ', buffer.toString());
        console.log('With StringDecodr: ', decoder.write(buffer));
    }
});

// input 0xE2 0x82 0xAC