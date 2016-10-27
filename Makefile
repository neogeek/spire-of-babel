BIN=node_modules/.bin

test:
	make lint
	$(BIN)/mocha test/specs/**.js

lint:
	$(BIN)/eslint bin/spire-of-babel
	$(BIN)/eslint lib/spire-of-babel.js
	$(BIN)/eslint test/fixtures/original --ignore-pattern test/fixtures/original/lint.js
	$(BIN)/eslint test/specs

coverage:
	$(BIN)/istanbul cover $(BIN)/_mocha test/specs && $(BIN)/codecov

fixtures:
	rm test/fixtures/transformed/* || exit 0;
	test/transform.sh

docs:
	$(BIN)/doxdox 'lib/**/*.js' --layout templates/DOCUMENTATION.hbs --output DOCUMENTATION.md

.PHONY: test coverage
