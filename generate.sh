#! /bin/sh
npx pbjs --no-verify --no-convert --no-delimited -t static-module -w es6 -o api/protocol.js ./proto/Proto/**/*.proto && npx pbts -o api/protocol.d.ts api/protocol.js