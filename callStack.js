// The Event Loop
// V8's call stack
// Slow I/O operations
// setTimeout // Node API
// setImmediate is similar to 0ms timeout and process.nextTick, it pushes a callback immediately after the current operation and before the event loop continues.


// Event Loop monitors both the call stack and the event queue and de-queue callstacks from the event queue into call stack, 
// wich gives V8 back the control to execute the content of those callbacks. 
console.log('------------sync---------Javascript is single thread in CPU-------------------------- ');
// it create a stack for every action from the heap and will put them in a queue

const add = (a, b) => {
    console.log('Add called');
    return a + b;
};

const double = a => {
    console.log('Double called');
    return add(a, a);
};

const print = a => {
    console.log('Print called');
    const output = double(a);
    console.log('Output: ', output);
    console.log('Print closed');
};

print(3);

console.log('------------Async----Handling slow operations in single thread------------------------------- ');

const {
    performance,
} = require('perf_hooks');


const slowAdd = (a, b) => {
    console.log('Started add slow: ', a, ' ', b);
    const time = process.hrtime();
    let output;

    for (let i = 0; i < 999999999; i++) {
        output = a + b;
    };
    console.log(process.hrtime(time));
    return output;
};

performance.mark('test');


const a = slowAdd(2, 4);
const b = slowAdd(3, 3);
const c = slowAdd(4, 4);

// First it execute all above functions then it will print the console logs below

console.log(a);
console.log(b);
console.log(c);

console.log('---------Very slow-------------------------------------------------');

const superSlowAdd = (a, b) => {
    console.log('Started add super slow: ', a, ' ', b);
    setTimeout(() => {
        console.log(a + b);
    }, 5000);
};

superSlowAdd(9, 9);
superSlowAdd(6, 2);

// Started add super slow:  9   9
// Started add super slow:  6   2
// 18
// 8

console.log('--------Timer 0 second-------------------------------------------------');

const timerZerouperSlowAdd = (a, b) => {
    console.log('Started add timer zero slow: ', a, ' ', b);
    setTimeout(() => {
        console.log(a + b);
    }, 0);
};

timerZerouperSlowAdd(9, 6);
timerZerouperSlowAdd(6, 33);

// It put the timer in Node API queue and then it calls the anonymouse function in timer according to times adn queue
// Enevt loop will not caal the callback while stack in not empty and it waites for second callback in spite of the timer is zero, it's like first example above
// every part has its own queue first in CallStack then in Node API and finally in Event Loop, 
// and then event loop will call the callBakc and pushes thst to the stack, and after that the cosole logs will be run
// ---------Very slow-------------------------------------------------
// Started add super slow:  9   9
// Started add super slow:  6   2
// --------Timer 0 second-------------------------------------------------
// Started add timer zero slow:  9   6
// Started add timer zero slow:  6   33
// 15
// 39
// 18
// 8

// setImmediate calls before 

const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('Time out');
    });

    setImmediate(() => {
        console.log('Immediate');
    });
});


console.log('-------------------------NextTick NodeJS-------------------------------')
// process.nextTick it's very similar to setImmediate
// It's not technically part of the event loop and doesn't care about the phases of the event loop
// Node processes the callbacks registered with nextTick after the current operation completes and before the event loop continues.

function fileSize(fileName, cb) {
    if (typeof fileName != 'string') {
        return process.nextTick(cb, new TypeError('arguments should be string')); // is there is an Error it will be triggered last and it won't stop other parts of the code
    };

    fs.stat(fileName, (err, stats) => {
        if (err) {
            return cb(err);
        };

        cb(null, stats.size);
    });
};

fileSize(__filename, (err, size) => {
    console.log()
    if (err) throw err;

    console.log('Size in kb: ', size / 1024);
});

console.log('>>>>____>>>>____File size will be printed after this!!!!!');