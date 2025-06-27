const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register an event listener for the 'log' event
emitter.on('messageLogged', (arg) => {
    console.log(`Listener called, ${arg}`);
    });
// call a function to log a message
const log = require('./logger');
log.logMessage('Hello World!');


//