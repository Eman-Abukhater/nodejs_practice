// This module provides a simple logging function
var url =`https://example.com/api/logs`;

function logMessage(message) {
    console.log(`Logging message: ${message}`);
    // Here you would typically send the log to a remote server
    // For example, using fetch or another HTTP client
}
module.exports.logMessage = logMessage;
