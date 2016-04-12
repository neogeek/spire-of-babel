#!/bin/bash

for file in test/fixture/original/*.js; do
    ./bin/spire-of-babel "${file}" --output test/fixture/transformed/"$(basename "$file")"
done
