#!/bin/bash

for file in test/fixture/original/*.js; do
    if [[ "${file}" =~ "bundle" ]]; then
        ./bin/spire-of-babel "${file}" --bundle --output test/fixture/transformed/"$(basename "$file")"
    else
        ./bin/spire-of-babel "${file}" --output test/fixture/transformed/"$(basename "$file")"
    fi
done
