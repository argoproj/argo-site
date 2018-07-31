#!/usr/bin/env bash 

rm -rf .tmp/docs
projs=( argo argo-cd )

for proj in "${projs[@]}"
do
   yarn copyfiles  -e '**/vendor/*' -u 5 "../go/src/github.com/argoproj/$proj/**/*.{md,gif,jpg,png}" .tmp/docs
done

