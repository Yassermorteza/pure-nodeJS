// require('something');

// first Node looks for something.js
// second it looks for something.json
// third it looks for c++ file a binary something.node

const json = require('./data');

console.log(json);

// cd addon-src && node-gyp configure
// node-gyp build           to create the binary file
const addon = require('addon');

console.log(addon.hello());

// node && require.extensions
// require.extensions['.js'].toString();
// require.extensions['.json'].toString();
// require.extensions['.node'].toString();