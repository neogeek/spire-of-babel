function logMessage(message = '', { type = 'log' } = {}) {
    if (type === 'log') {
        console.log(message);
    } else if (type === 'error') {
        console.error(message);
    }
}

logMessage('Hello, friend.');
