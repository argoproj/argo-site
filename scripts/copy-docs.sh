#!/usr/bin/env bash 

mkdir -p /tmp/argo-site
[ ! -d  /tmp/argo-site/argo ] && git clone https://github.com/argoproj/argo.git /tmp/argo-site/argo
(cd /tmp/argo-site/argo && git pull)

rm -rf .tmp/docs
mkdir -p .tmp/docs/argo
cp -r /tmp/argo-site/argo/docs/* .tmp/docs/argo
cp -r /tmp/argo-site/argo/examples .tmp/docs/argo/
node ./scripts/index-docs.js .tmp/docs/argo > static/searchIndex.json
