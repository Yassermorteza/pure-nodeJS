// require('./ascii-art');

// In regard of loading the module more than once
// console.log(require.cache);
delete require.cache['/home/yaser/learning/pureNode/ascii-art.js'];

// the proper solution is to export the module and after requireing the module we should execute the exports object as function that we created before

require('./ascii-art')();

require('./ascii-art')();