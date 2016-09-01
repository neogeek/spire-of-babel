#!/bin/bash

for file in test/fixture/original/*.js; do
    if [[ ! "${file}" =~ .bundle|sourcemap|minify. ]]; then
        ./bin/spire-of-babel "${file}" --output ./test/fixture/transformed/"$(basename "$file")"
    fi
done

./bin/spire-of-babel test/fixture/original/bundle.js --bundle --output ./test/fixture/transformed/bundle.js
./bin/spire-of-babel test/fixture/original/sourcemap.js --sourcemap --output ./test/fixture/transformed/sourcemap.js
./bin/spire-of-babel test/fixture/original/sourcemap.js --sourcemap > ./test/fixture/transformed/sourcemap_inline.js
./bin/spire-of-babel test/fixture/original/react.jsx --output ./test/fixture/transformed/react.js

./bin/spire-of-babel test/fixture/original/sourcemap_bundle.js --bundle --sourcemap --output ./test/fixture/transformed/sourcemap_bundle.js
./bin/spire-of-babel test/fixture/original/sourcemap_bundle.js --bundle --sourcemap > ./test/fixture/transformed/sourcemap_bundle_inline.js

./bin/spire-of-babel test/fixture/original/minify_bundle.js --minify --bundle > ./test/fixture/transformed/minify_bundle.js
