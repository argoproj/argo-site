#!/usr/bin/env bash

ARGO_URL=https://raw.githubusercontent.com/argoproj/argo/master/USERS.md
ARGOCD_URL=https://raw.githubusercontent.com/argoproj/argo/master/USERS.md

for url in $({ curl -s $ARGO_URL && curl -s $ARGOCD_URL; } | grep -Eo '(http|https)://[^/"]+' |  cut -d ")" -f1  | awk -F/ '{print $3}' | sort | uniq)
do
    if curl -s --fail https://logo.clearbit.com/$url > /dev/null; then
        echo $url
    else
        if ! grep -q "$url" src/assets/logos.json; then
            >&2 echo "No logo for $url. Please add logo manually to src/assets/logos.json"
        fi
    fi
done
