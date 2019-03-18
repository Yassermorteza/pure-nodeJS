// node && console  // in terminal
/*
Console {
  log: [Function: bound consoleCall],
  debug: [Function: bound consoleCall],
  info: [Function: bound consoleCall],
  dirxml: [Function: bound consoleCall],
  warn: [Function: bound consoleCall],
  error: [Function: bound consoleCall],
  dir: [Function: bound consoleCall],
  time: [Function: bound consoleCall],
  timeEnd: [Function: bound consoleCall],
  timeLog: [Function: bound timeLog],
  trace: [Function: bound consoleCall],
  assert: [Function: bound consoleCall],
  clear: [Function: bound consoleCall],
  count: [Function: bound consoleCall],
  countReset: [Function: bound consoleCall],
  group: [Function: bound consoleCall],
  groupCollapsed: [Function: bound consoleCall],
  groupEnd: [Function: bound consoleCall],
  table: [Function: bound consoleCall],
  Console: [Function: Console],
  markTimeline: [Function: markTimeline],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeline: [Function: timeline],
  timelineEnd: [Function: timelineEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  [Symbol(counts)]: Map {},
  [Symbol(kColorMode)]: 'auto' }
*/

const fs = require("fs");
const util = require("util");

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const console2 = new console.Console(out, err);

setInterval(function () {
    console2.log(new Date());
    console2.error(new Error('Ooops!'));
}, 5000);

// tail -f *.log // in terminal to read the log files async

// console.log uses the util module under the hood
console.log('One %s', 'thing');
util.format('One %s', 'thing');

console.log({
    d: 0
});
util.inspect({
    d: 0
});

console.dir(global, {
    depth: 0
});
util.inspect(global, {
    depth: 0
});

console.assert(3 == '3');
console.assert(3 === '3'); // throw error

console.trace("here"); // behaves like console.error , but it prints the error at the point where it is, it's handy for debugging problem

console.time("start");
console.timeEnd("start");