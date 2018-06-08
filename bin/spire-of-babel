#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const updateNotifier = require('update-notifier');

const spire = require('../lib/spire-of-babel');
const utils = require('../lib/utils');

const pkg = require('../package');

const args = require('parse-cmd-args')(null, {
    'requireUserInput': true
});

updateNotifier({
    'defer': true,
    pkg
}).notify();

/**
 * Transforms input based on options passed to the command and outputs to either stdout or file.
 */

const transform = (input, options) =>
    spire.transformFile(input, options).then(result => {

        if (options.output) {

            fs.writeFile(options.output, result.code, 'utf8', err => {

                if (err) {

                    process.stderr.write(`${err}\n`);

                } else if (options.sourcemap) {

                    fs.writeFile(`${options.output}.map`, result.map, 'utf8', err => {

                        if (err) {

                            process.stderr.write(`${err}\n`);

                        }

                    });

                }

            });

        } else {

            process.stdout.write(result.code);

        }

    });

/**
 * Lints input based on options passed to the command.
 */

const lint = options =>
    utils
        .findConfigFile(process.cwd())
        .then(configFile => spire.lintFile(options.dir, configFile));

/**
 * Lints and transforms input based on options passed to the command.
 */

const lintAndTransform = (input, options) => {

    if (options.lint) {

        lint(options)
            .then(() => transform(input, options))
            .catch(err => {

                process.stderr.write(`${err}\n`);

            });

    } else {

        transform(input, options).catch(err => {

            process.stderr.write(`${err}\n`);

        });

    }

};

const options = {
    'bundle': args.flags['--bundle'] || args.flags['-b'] || false,
    'dir': args.flags['--dir'] || args.flags['-d'] || null,
    'lint': args.flags['--lint'] || args.flags['-l'] || false,
    'minify': args.flags['--minify'] || args.flags['-m'] || false,
    'output': args.flags['--output'] || args.flags['-o'] || null,
    'presets': args.flags['--presets'] || args.flags['-p'] || 'es2015',
    'sourcemap': args.flags['--sourcemap'] || args.flags['-s'] || false,
    'watch': args.flags['--watch'] || args.flags['-w'] || null
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
${chalk.yellow('  -d, --dir')}          Directory to run linter on.
${chalk.yellow('  -l, --lint')}         Lint files before transpiling.
${chalk.yellow('  -m, --minify')}       Minify output.
${chalk.yellow('  -o, --output')}       Path to save transformed file to. Defaults to stdout.
${chalk.yellow(
        '  -p, --presets'
    )}      Load custom presets (es2015, es2016, es2017, latest). Defaults to es2015. Comma delimited value.
${chalk.yellow('  -s, --sourcemap')}    Generate sourcemap.
${chalk.yellow('  -w, --watch')}        File path to watch for changes. Example: ./test/**/*.jsx

`);
    process.exit();

} else {

    if (!options.dir) {

        options.dir = path.resolve(path.dirname(args.input));

    }

    if (options.watch) {

        options.watch = utils.parseWatchPath(options.watch);

        fs.watch(
            options.watch.directory,
            {
                'recursive': options.watch.recursive
            },
            (event, filename) => {

                const file = `${options.watch.directory}/${filename}`;

                if (event === 'change' && file.match(new RegExp(`${options.watch.filename}$`))) {

                    if (options.output) {

                        if (file === options.output) {

                            return false;

                        }

                        process.stdout.write(`
${chalk.gray('Change detected to: ')}${file}
${chalk.green('Transformed: ')}${args.input} -> ${options.output}
`);

                    }

                    lintAndTransform(args.input, options);

                }

                return false;

            }
        );

    } else {

        lintAndTransform(args.input, options);

    }

}
