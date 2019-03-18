`Node's Architecture: V8 and libuv`

`The tow important players in Nod's Architecture are V8 and libuv.`
`Node's default VM is, and will be continue to be, V8, although V8 is one option out of many,`
`and Node is on a path to be VM-agnistic.`
`One other strong option for a Node's VM is the chakra engine by Microsoft.`
`The Chakra engine is what powes the Microsoft Edge web browser, and there is an active work in porgress`
`to get Node to work on ChakraCore, see repo Nodejs/node-chakravore.`
`So Node uses a VM, which is default, to execute JavaScript code which means the`
`JavaScript features that are avaialable in Node are really the JavaScript features`
`supported by the V8 engine shipped with Node.`
`This support is managed with three feature groups, shipping, staged, and in progress.`
`Shipping features are on by default. Staged and inprogress features`
`are not, but we can use command-line flages to enable them.`
`Staged features are almost complete but not quite ther yet.`
`You can say the V8 team is not completely comfortable shipping them yet.`
`But we can the --harmoney flag to anble them.`
`For example, string padding methodes will be part of the next EcmaScript version,`
`so right now rthey are availble to my current Node, whivch is at version 7.1.0,`
`under a harmoney flag. if we try to execute one of the string padding methods, padEnd, it will not work;`
`however, with a harmoney flag it works. node --harmony -p "'Node'.padEnd(8, '*')"`
`in progress features are less stable, but we can still enable them if we want with specefic flags.`
`You can see a list of alll the in progress features available in the currently used node with this command.`
`For example in this version of v8 that's being use by Nodes 7.1, this is the list of all the in-progress features`
`that we can test. node --v8-options | grep "inprogress"`
`Trailing commas in function parameters is one of them here. --harmony_trailing_commas`
`If we try to define a function with trailing commas, we'll get an error.`
`But with the --harmony_trailing_commas here, V8 wil gladly accept that. node --harmony_traling_commas -p 'function tc(a,b,){}`
`By the way, you should take a look att all the V8 options. One of my favorites is the --strict-mode to`
`enforce strict mode for all the executed code (instead of remembereing to always use strict mode manually). node--v8-options | less`
`You can also disable features that comes enabled by default if you need to. it's a big list of options,`
`and you probably don't need most of them, but know that you can easily grep this list too seee if you can control a`
`specefic V8 behavior. Fro example, if we want to see what ipotions we can control for the grabage collector, all we have to do is grep.`
`For example,(node --v8-options | grep gc ) --trace_gc here's the populare trace-gc to get a log line every time the gc runs, and here's the expose gc`
`--expose_gc here's the expose gc option which is useful when you're measuring memory usage, because it allows you to manually force a garbage collector from whitin JavaScript.`
`Although, just know that this (node --expose-gc -e "gc()") will pause all other executions in your app, so don't use it too often.`
`One final quick tip about V8 options. you can actually set them at run time using the V8 module.`
`After you require it, there is a setFlagsFormString, this is also to be used with care, and it'll probably not work for all the options.`
`The more useful methodes on this v8 modules are the heapStatistics method, which can be used to get information about`
`the heap memory, like its total size, the currenlty used size, and olde.new heap spaces and more. Node is more than a wrapper for v8,`
`it provides APIs for working with operating system files, binary data, networking and much more.`
`It's useful to understand how V8 and Node interact and work together.`
`First, Node uses V8 via V8's C++ API.`
`Node itself has an API which we can use in JavaScript, and it allows us to interact with the filesystem, network, timers, and others.`
`The Node API eventually executes C++ code using V8 object and functio templates, but it's not part of V8 itself.`
`Node also handles the waiting for asynchronous events for us using libuv.`
`When Node is done waiting for I/O operations or timers, it usually has callback functions to invoke, and when it's time to invoke these`
`callbakcs, Node simply passes the control into the V8 engine. When V8 is done with the code in the callback, the control is passed back to Node.`
`this is important to understand as when the control is with V8 and since is single-threaded, Node cannot execute anymore JavaScript code,`
`no matter how many callbacks have been registered, Node will wait until V8 can handle more operations. this is actually what makes programming in Node easy.`
`We don't have to worry about locking or race conditions. There's only one thread where our javaScript code runs.`
`Libuv is a C library developed for Node, but it's now used by languages like Rust, Julia, and others.`
`It's used to abstract the non-blocking I/O operations to a consistent interface across many operating systems.`
`It's what handles operations on the file system, TCP/UDP sockets, child processes, and others.`
`Libuv includes a thread pool to handle what can't be done asynchronously at the operating system level.`
`Libuv is also what provides Node with the event-loop, which we will cover in module 2.`
`Other than V8 and Libuve, Node has a few more dependencies that we should talk about:`
`Http-parser is a small C library for parsing HTTP messages.`
`It works for both requests and responses and it's designed to have a very small pre-request memory footprint.`
`We're covering HTTP requests and responses in module 5.`
`C-ares is what enables performing asynchronous DNS queries.`
`OpenSSl is used mostly in the TLS and crypto modules. It provides implementation for many cryptographic functions.`
`Zlib is used for its fast async streaming compression and decompression.`

`NodejS comes with a veriety of CLI options.`
`These options expose built-in debugging, multiple ways to execute scripts, and other helpful runtime options.`
`Running the Node command without arguments starts a REPL (Read, Eval, Print, Loop).`
`I use Node as a REPL very often. It's really a convinient way to quickly test javaScript specially when you're already in a terminal.`
`So when you hit Enter in a REPL, it reads the command, executes it, and then prints its result to the screen, and then it waits for your next command.`
`That's why you don't need to use console.log in the REPL, and sometimes you'll see it outputs undefined,`
`because manay commands, like defining a variable here, don't have any output.`
`One of the most useful features of Node's REPL is the auto-complete. if you just tab-tab on an empty line,`
`you get this big list, which equivalent to tabbing on the global object.`
`Auto-complete works on any object. For example, say that we have an array in a variable like (var arr = [];)`
`Doing arr. and then tab on that gives you everything you can do on the array object.`

`NODE_NO_READLINE=1 rlwrap node`
`. tab`
`.break`
`.help`
`.load hello.js`
`.save session.js to save the history of REPL in a file`
`.editor to put a value in command to use it`
