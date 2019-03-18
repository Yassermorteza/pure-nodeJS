const util = require('util');

// mark a function as deprecated beforee you export
module.exports.puts = util.deprecate(function () {
    for (let i = 0, len = arguments.length; i < len; ++i) {
        process.stdout.write(arguments[i] + '\n');
    }
}, 'puts: Use console.log instead!');