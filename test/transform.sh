#!/bin/bash

rm test/fixtures/transformed/*.js

for file in test/fixtures/original/*.js; do
    if [[ ! "${file}" =~ .bundle|sourcemap|minify. ]]; then
        node ./bin/spire-of-babel "${file}" > ./test/fixtures/transformed/"$(basename "$file")"
    fi
done

node ./bin/spire-of-babel.js test/fixtures/original/bundle.js --bundle > ./test/fixtures/transformed/bundle.js
node ./bin/spire-of-babel.js test/fixtures/original/sourcemap.js --minify --sourcemap inline > ./test/fixtures/transformed/sourcemap_inline.js
node ./bin/spire-of-babel.js test/fixtures/original/react.jsx > ./test/fixtures/transformed/react.js

node ./bin/spire-of-babel.js test/fixtures/original/minify.js --minify > ./test/fixtures/transformed/minify.js
node ./bin/spire-of-babel.js test/fixtures/original/minify_bundle.js --minify --bundle > ./test/fixtures/transformed/minify_bundle.js

node ./bin/spire-of-babel.js test/fixtures/original/typescript.ts > ./test/fixtures/transformed/typescript.js

NODE_ENV=production node ./bin/spire-of-babel.js test/fixtures/original/process_env_bundle.js --bundle --minify > ./test/fixtures/transformed/process_env_bundle_production.js
