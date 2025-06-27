const EventEmitter = require('events');
// call a function to log a message
const Logger = require('./logger');
const log = new Logger();
// Register an event listener for the 'log' event
emitter.on('messageLogged', (arg) => {
    console.log(`Listener called, ${arg}`);
    });

Logger.log('Hello World!');

//