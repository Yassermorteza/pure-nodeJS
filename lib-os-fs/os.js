const os = require('os');

console.log(os.freemem());
console.log(os.type());
console.log(os.release());
console.log(os.userInfo());
console.log(os.constants.signals); // see a refrence of all process