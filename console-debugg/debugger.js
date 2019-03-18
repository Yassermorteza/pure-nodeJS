function negativeSum(...args) {
    return args.reduce((arg, total) => {
        return total - arg;
    }, 0);
};

console.log(negativeSum(1, 5, 10));

// node isnpect debugger.js  // to run the debugger
// For help, see: https://nodejs.org/en/docs/inspector

// restart command to restart 
// sb(linenumber) to add a break point
// cont  // continue command
// repl // inspect anything accesible to the script // like typing args to access args on line 2 on code above

// the best solution is using chrome devtools by  node --inspect command plus --debug-brk to break