#!/bin/bash

for file in test/fixtures/original/*.js; do
    if [[ ! "${file}" =~ .bundle|sourcemap|minify. ]]; then
        ./bin/spire-of-babel "${file}" --output ./test/fixtures/transformed/"$(basename "$file")"
    fi
done

./bin/spire-of-babel test/fixtures/original/bundle.js --bundle --output ./test/fixtures/transformed/bundle.js
./bin/spire-of-babel test/fixtures/original/sourcemap.js --sourcemap --output ./test/fixtures/transformed/sourcemap.js
./bin/spire-of-babel test/fixtures/original/sourcemap.js --sourcemap > ./test/fixtures/transformed/sourcemap_inline.js
./bin/spire-of-babel test/fixtures/original/react.jsx --output ./test/fixtures/transformed/react.js

./bin/spire-of-babel test/fixtures/original/sourcemap_bundle.js --bundle --sourcemap --output ./test/fixtures/transformed/sourcemap_bundle.js
./bin/spire-of-babel test/fixtures/original/sourcemap_bundle.js --bundle --sourcemap > ./test/fixtures/transformed/sourcemap_bundle_inline.js

./bin/spire-of-babel test/fixtures/original/minify.js --minify > ./test/fixtures/transformed/minify.js
./bin/spire-of-babel test/fixtures/original/minify_bundle.js --minify --bundle > ./test/fixtures/transformed/minify_bundle.js
