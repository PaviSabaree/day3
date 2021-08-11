// simple module:

var myLog = require('./log.js');
myLog.info('Started')



// export string:

var msg=require('./msg');
console.log(msg);


// export object:
var msg=require('./msg.js');
console.log(msg.SimpleMessage);

// obj with fn:
var msg=require('./log.js');
msg.log('Hello World');

// anonymous fn:
var msg= require('./log.js');
msg('Hello World!');