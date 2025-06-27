// This module provides a simple logging function

const EventEmitter = require('events');
// Create an instance of EventEmitter
const emitter = new EventEmitter();
var url =`https://example.com/api/logs`;

function logMessage(message) {
    console.log(`Logging message: ${message}`);
    // Emit the 'log' event with the message
    emitter.emit('log', message);
    
}
module.exports.logMessage = logMessage;
