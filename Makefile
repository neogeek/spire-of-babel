BIN=node_modules/.bin

test:
	make lint
	$(BIN)/mocha ./test/specs/**.js

lint:
	$(BIN)/eslint ./bin/spire-of-babel
	$(BIN)/eslint ./lib/spire-of-babel.js
	$(BIN)/eslint ./test/fixture/original
	$(BIN)/eslint ./test/specs

coverage:
	mkdir lib-es5 || exit 0;
	./bin/spire-of-babel ./lib/spire-of-babel.js > ./lib-es5/spire-of-babel.js
	./bin/spire-of-babel ./lib/utils.js > ./lib-es5/utils.js
	$(BIN)/jscover lib-es5 lib-cov
	COVERAGE=1 $(BIN)/mocha ./test/specs/**/*.js -R html-cov > coverage.html || exit 0;
	COVERAGE=1 $(BIN)/mocha ./test/specs/**/*.js -R mocha-reporter-cov-summary || exit 0;
	rm -rf lib-cov
	rm -rf lib-es5

transform:
	rm test/fixture/transformed/* || exit 0;
	test/transform.sh

docs:
	$(BIN)/doxdox lib/ --layout templates/DOCUMENTATION.hbs --output DOCUMENTATION.md

setup:
	rm -rf config/eslint-coding-standards || exit 0;
	(cd config && curl -L https://github.com/neogeek/eslint-coding-standards/archive/master.tar.gz | tar -xz && mv eslint-coding-standards-master eslint-coding-standards)

.PHONY: test
