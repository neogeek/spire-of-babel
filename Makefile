test:
	make lint
	./node_modules/.bin/mocha ./test/specs/**.js

lint:
	./node_modules/.bin/eslint ./bin/spire-of-babel
	./node_modules/.bin/eslint ./lib/spire-of-babel.js
	./node_modules/.bin/eslint ./test/fixture/original
	./node_modules/.bin/eslint ./test/specs

coverage:
	mkdir lib-es5 || exit 0;
	./bin/spire-of-babel ./lib/spire-of-babel.js > ./lib-es5/spire-of-babel.js
	./node_modules/.bin/jscover lib-es5 lib-cov
	COVERAGE=1 ./node_modules/.bin/mocha ./test/specs/**/*.js -R html-cov > coverage.html || exit 0;
	COVERAGE=1 ./node_modules/.bin/mocha ./test/specs/**/*.js -R mocha-reporter-cov-summary || exit 0;
	rm -rf lib-cov
	rm -rf lib-es5

transform:
	rm test/fixture/transformed/*.js || exit 0;
	test/transform.sh

docs:
	./node_modules/.bin/doxdox lib/ --layout templates/README.hbs --output README.md

setup:
	rm -rf config/eslint-coding-standards || exit 0;
	(cd config && curl -L https://github.com/neogeek/eslint-coding-standards/archive/master.tar.gz | tar -xz && mv eslint-coding-standards-master eslint-coding-standards)

.PHONY: test
