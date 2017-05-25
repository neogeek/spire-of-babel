#!/bin/bash

rm test/fixtures/transformed/* || exit 0;

for file in test/fixtures/original/*.js; do
    if [[ ! "${file}" =~ .bundle|sourcemap|minify|presets. ]]; then
        node ./bin/spire-of-babel "${file}" --output ./test/fixtures/transformed/"$(basename "$file")"
    fi
done

node ./bin/spire-of-babel test/fixtures/original/bundle.js --bundle --output ./test/fixtures/transformed/bundle.js
node ./bin/spire-of-babel test/fixtures/original/sourcemap.js --sourcemap --output ./test/fixtures/transformed/sourcemap.js
node ./bin/spire-of-babel test/fixtures/original/sourcemap.js --sourcemap > ./test/fixtures/transformed/sourcemap_inline.js
node ./bin/spire-of-babel test/fixtures/original/react.jsx --output ./test/fixtures/transformed/react.js

node ./bin/spire-of-babel test/fixtures/original/sourcemap_bundle.js --bundle --sourcemap --output ./test/fixtures/transformed/sourcemap_bundle.js
node ./bin/spire-of-babel test/fixtures/original/sourcemap_bundle.js --bundle --sourcemap > ./test/fixtures/transformed/sourcemap_bundle_inline.js

node ./bin/spire-of-babel test/fixtures/original/minify.js --minify > ./test/fixtures/transformed/minify.js
node ./bin/spire-of-babel test/fixtures/original/minify_bundle.js --minify --bundle > ./test/fixtures/transformed/minify_bundle.js

node ./bin/spire-of-babel test/fixtures/original/presets-env-stage-2.jsx --presets env,stage-2 --output ./test/fixtures/transformed/presets-env-stage-2.js

node ./bin/spire-of-babel test/fixtures/original/typescript.ts > ./test/fixtures/transformed/typescript.js
