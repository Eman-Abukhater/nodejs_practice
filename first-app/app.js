// This is a simple Node.js application that uses the EventEmitter class to handle events.
const EventEmitter = require('events');
// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Define a listener for the 'greet' event
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
    });

// Emit the 'greet' event
emitter.emit('greet', 'World');


