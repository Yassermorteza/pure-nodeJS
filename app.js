require('./util');

console.log(answer);

// ctrl + z   exit 
// in global process and buffer objects are important
// node -p "process" | less
// node -p "process.versions"
// node -v 
// node -p "process.env" | less 
// env | less

const {
    config
} = require('./config');

console.log(config.port);

// node -p "process.release.lts"    show if node is lts version or not

// standard streams 
// stdin     for read
// stdout    for write
// stderr    to write any errors