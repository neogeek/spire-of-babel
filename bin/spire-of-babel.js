#!/usr/bin/env node

const chalk = require('chalk');
const updateNotifier = require('update-notifier');

const spire = require('../lib/spire-of-babel');

const pkg = require('../package');

const args = require('parse-cmd-args')(null, {
    requireUserInput: true
});

updateNotifier({
    defer: true,
    pkg
}).notify();

const options = {
    bundle: args.flags['--bundle'] || args.flags['-b'] || false,
    sourceMaps: args.flags['--sourcemap'] || args.flags['-s'] || false
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
${chalk.yellow('  -s, --sourcemap')}    Generate sourcemap.`);
    process.exit();
} else {
    spire
        .transformFile(args.input, options)
        .then(({ code }) => process.stdout.write(code));
}
