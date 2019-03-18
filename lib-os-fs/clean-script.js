const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');

const ms1Day = 24 * 60 * 60 * 1000;

const files = fs.readdirSync(dirname);

files.forEach(file => {
    const filePath = path.join(dirname, file); // Always use path.join when working with files path to make your code platform-agnostic.
    fs.stat(filePath, (err, stat) => { // stat gives only the meta information about the file
        if (err) throw err;

        if ((Date.now() - stat.mtime.getTime() > 7 * ms1Day)) {
            fs.unlink(filePath, (err) => {
                if (err) throw err;

                console.log(`deleted ${filePath}`);
            });
        };
    });
});