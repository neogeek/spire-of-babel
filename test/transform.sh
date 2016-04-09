#!/bin/bash

for file in test/fixture/*.js; do
    ./bin/spire-of-babel "${file}" > test/fixture/transformed/"$(basename "$file")"
done
