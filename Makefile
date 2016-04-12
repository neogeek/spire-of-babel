test:
	./node_modules/.bin/jshint ./lib/spire-of-babel.js
	./node_modules/.bin/mocha ./test/specs/**.js

transform:
	rm test/fixture/transformed/*.js || exit 0;
	test/transform.sh

docs:
	./node_modules/.bin/doxdox lib/ --layout templates/README.hbs --output README.md

.PHONY: test
