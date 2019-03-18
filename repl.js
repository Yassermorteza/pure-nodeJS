const repl = require('repl');

let r = repl.start({
    ignoreUndefined: true,
    replNode: repl.REPL_MODE_STRICT
});

// r.context.loadash = require('loadash'); // make ladash available globaly in REPL