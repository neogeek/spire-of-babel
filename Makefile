test:
	./node_modules/.bin/jshint ./bin/spire-of-babel
	./node_modules/.bin/jshint ./lib/spire-of-babel.js
	./node_modules/.bin/jshint ./test/fixture/original
	./node_modules/.bin/jshint ./test/specs
	./node_modules/.bin/mocha ./test/specs/**.js

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

.PHONY: test
