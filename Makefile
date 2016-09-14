BIN=node_modules/.bin

test:
	make lint
	$(BIN)/mocha ./test/specs/**.js

lint:
	$(BIN)/eslint ./bin/spire-of-babel
	$(BIN)/eslint ./lib/spire-of-babel.js
	$(BIN)/eslint ./test/fixture/original --ignore-pattern test/fixture/original/lint.js
	$(BIN)/eslint ./test/specs

coverage:
	$(BIN)/istanbul cover $(BIN)/_mocha ./test/specs && $(BIN)/codecov

transform:
	rm test/fixture/transformed/* || exit 0;
	test/transform.sh

docs:
	$(BIN)/doxdox lib/ --layout templates/DOCUMENTATION.hbs --output DOCUMENTATION.md

.PHONY: test coverage
