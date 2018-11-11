#!/usr/bin/env bash 

rm -rf .tmp/docs
projs=( argo argo-cd argo-events )

for proj in "${projs[@]}"
do
   yarn copyfiles -u 5 "../go/src/github.com/argoproj/$proj/**/*.{md,gif,jpg,png}" .tmp/docs && rm -rf ".tmp/docs/$proj/vendor"
done

yarn copyfiles "../argo-ci/**/*.{md,gif,jpg,png}" .tmp/docs/argo-ci && node ./scripts/index-docs.js .tmp/docs > static/searchIndex.json
rm -rf .tmp/docs/argo-ci/node_modules
