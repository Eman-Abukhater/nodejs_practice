// This module provides a simple logging function

const EventEmitter = require('events');
// Create an instance of EventEmitter
const emitter = new EventEmitter();
var url =`https://example.com/api/logs`;

class Logger extends EventEmitter {
    log(message) {
        console.log(`Logging message: ${message}`);
        // Emit the 'log' event with the message
        this.emit('Messagelogged', { id: 1, url: url, message: message });
    }
}


module.exports = Logger;
  