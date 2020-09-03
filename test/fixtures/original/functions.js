const logMessage = (message = '', { type = 'log', display = true } = {}) => {
    if (display) {
        if (type === 'log') {
            console.log(message);
        } else if (type === 'error') {
            console.error(message);
        }
    }
};

logMessage('Hello, friend.');

const displayQuotes = (...quotes) => {
    console.log(...quotes);
};

displayQuotes(
    'Hello, friend.',
    'Hello, friend?',
    "That's lame.",
    "Maybe I should give you a name, but that's a slippery slope.",
    "You're only in my head.",
    'We have to remember that.',
    'Shit.'
);
