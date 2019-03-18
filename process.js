// process is an event emitter

process.on('exit', (code) => {
    // do one final synchrounous operation
    // before the node process terminates
});

process.on('uncoughtException', (err) => {
    // something went unhandled.
    // Do any cleanup and exit anyway!

    console.error(err);

    // Force exit the process too.
    process.exit(1);
});

// keep the event loop busy 
process.stdin.resume();

// trigger a TypeError execption
console.dog();