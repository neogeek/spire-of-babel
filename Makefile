test:
	./node_modules/.bin/mocha ./test/specs/**.js

transform:
	rm test/fixture/transformed/*.js
	./bin/spire-of-babel test/fixture/let.js > test/fixture/transformed/let.js
	./bin/spire-of-babel test/fixture/const.js > test/fixture/transformed/const.js
	./bin/spire-of-babel test/fixture/function_default_attribute.js > test/fixture/transformed/function_default_attribute.js

docs:
	./node_modules/.bin/doxdox lib/ --layout templates/README.hbs --output README.md

.PHONY: test
