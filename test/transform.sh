#!/bin/bash

rm test/fixtures/transformed/*.js

for file in test/fixtures/original/*.js; do
    if [[ ! "${file}" =~ .bundle|sourcemap ]]; then
        node ./bin/spire-of-babel "${file}" > ./test/fixtures/transformed/"$(basename "$file")"
    fi
done

node ./bin/spire-of-babel.js test/fixtures/original/bundle.js --bundle > ./test/fixtures/transformed/bundle.js
node ./bin/spire-of-babel.js test/fixtures/original/sourcemap.js --sourcemap > ./test/fixtures/transformed/sourcemap_inline.js
node ./bin/spire-of-babel.js test/fixtures/original/react.jsx > ./test/fixtures/transformed/react.js

node ./bin/spire-of-babel.js test/fixtures/original/typescript.ts > ./test/fixtures/transformed/typescript.js

NODE_ENV=production node ./bin/spire-of-babel.js test/fixtures/original/process_env_bundle.js --bundle > ./test/fixtures/transformed/process_env_bundle_production.js
