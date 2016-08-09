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
	$(BIN)/istanbul cover $(BIN)/_mocha ./test/specs

transform:
	rm test/fixture/transformed/* || exit 0;
	test/transform.sh

docs:
	$(BIN)/doxdox lib/ --layout templates/DOCUMENTATION.hbs --output DOCUMENTATION.md

setup:
	rm -rf config/eslint-coding-standards || exit 0;
	(cd config && curl -L https://github.com/neogeek/eslint-coding-standards/archive/master.tar.gz | tar -xz && mv eslint-coding-standards-master eslint-coding-standards)

.PHONY: test coverage
