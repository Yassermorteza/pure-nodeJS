// The EventEmitter is a module that facilitates communication between objects in Node.
// EventEmitter is at the core of the Node asymchronous event-driven architecture.
// Many of node's built-in modules inherit from EventEmitter.

const fs = require('fs');
const EventEmitter = require('events');


class Logger extends EventEmitter {
    execute(taskFunc) {
        console.log('Before executing');
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log('After executing');
        console.log('-------------------------------')
    }

    executeAsync(asyncFunc, ...args) {
        console.time('execute');
        this.emit('begin');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            };

            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }

};

const logger = new Logger();

// logger.emit('event');

// logger.on('event', listenerFunc);

logger.on('begin', () => console.log('About to execute'));
logger.on('end', () => console.log('Done with execute'));

//  sync event emmiter-----------------
logger.execute(() => () => console.log('*** Executing task ***'));

// Async event emitter-----------------
// logger.asyncExecute(() => setTimeout(() => console.log('*** Executing task ***'), 500));
logger.on('data', data => {
    console.log('Length is: ', data.length);
});

// logger.on('error', console.error);

logger.once('uncaughtException', err => {
    console.log(err);

    process.exit(1);
});

logger.executeAsync(fs.readFile, __filename);
logger.executeAsync(fs.readFile, '');