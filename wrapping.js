exports.id = 1; // It is ok

exports = {
    id: 1
}; // It's not okay

module.exports = {
    id: 1
}; // this is ok

var g = 22; // it's local,  not exported

// node && require('module').wrapper
// [ '(function (exports, require, module, __filename, __dirname) { ',
//   '\n});' ]
// This function wrapping process is what keeps the top-level variables in any module scoped to that module
// and it is what makes the module/exports/reqiure variables appear to look global when, in fact, they are specific to each module.
// smae thing for __filename/__dirname variables will contain the module's absolute filename and directory path. 
// All these variables are simply function arguments whose values are provided to wrapped function by Node.

console.log(arguments);

// let exports = module.exports;

require = function () {
    mocked: true
};

const fs = require('fs');

console.log('FS: ', fs); // undefined

const printState = (state1, state2) => {
    console.log(state1 + state2);
};


// Make it work from the both commandline and run in another file
if (require.main === module) {
    // Running as a scipt
    print(process.arg[2], process.arg[3]);
} else {
    // Being required by other file
    module.exports = printState;
};