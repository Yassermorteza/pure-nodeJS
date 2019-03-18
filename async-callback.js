const fs = require('fs');

console.log('----------------CallBack---------------------------------------------------');

const readFileAsArray = function (file, cb) {
    fs.readFile(file, function (err, data) {
        if (err) {
            return cb(err);
        };

        const lines = data.toString().trim().split('\n');
        cb(null, lines);
    });
};

// example call
readFileAsArray('./numbers.js', (err, lines) => {
    if (err) throw err;

    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd numbers count: ', oddNumbers.length);
});



console.log('----------------Async promise---------------------------------------------------');

const readFileAsArrayAsync = function (file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function (err, data) {
            if (err) {
                return reject(err);
            };

            const lines = data.toString().trim().split('\n');
            resolve(lines);
        });
    });
};

// example call
readFileAsArrayAsync('./numbers.js')
    .then(lines => {
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('odd numbers count: ', oddNumbers.length);
    })
    .catch(err => console.error(err));


console.log('----------------Async await---------------------------------------------------');

async function countOdd() {
    try {
        const lines = await readFileAsArrayAsync('./numbers.js');
        // console.log(readFileAsArrayAsync('./numbers.js')); // it returns a promise without await
        const numbers = lines.map(Number);
        const oddCount = numbers.filter(number => number % 2 === 1);
        console.log('odd numbers count: ', oddCount);
    } catch (err) {
        console.error(err);
    };
};

countOdd();