#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const updateNotifier = require('update-notifier');

const spire = require('../lib/spire-of-babel');

const pkg = require('../package');

const args = require('parse-cmd-args')(null, {
    'requireUserInput': true
});

updateNotifier({
    'defer': true,
    pkg
}).notify();

const transform = (input, options) => spire.transformFile(input, options);

const options = {
    'bundle': args.flags['--bundle'] || args.flags['-b'] || false,
    'minified': args.flags['--minify'] || args.flags['-m'] || false,
    'sourceMaps': args.flags['--sourcemap'] || args.flags['-s'] || false
};

if (args.flags['--version'] || args.flags['-v']) {

    process.stdout.write(`${pkg.version}\n`);
    process.exit();

} else if (!args.input || args.flags['--help'] || args.flags['-h']) {

    process.stdout.write(`
${chalk.blue(' Usage:')} spire-of-babel <path> [options]

 Options:

${chalk.yellow('  -h, --help')}         Display this help message.
${chalk.yellow('  -v, --version')}      Display the current installed version.
${chalk.yellow('  -b, --bundle')}       Use browserify bundler.
${chalk.yellow('  -m, --minify')}       Minify output.
${chalk.yellow('  -s, --sourcemap')}    Generate sourcemap.`);
    process.exit();

} else {

    transform(args.input, options).then(({code}) =>
        process.stdout.write(code));

}
