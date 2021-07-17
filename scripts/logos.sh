#!/usr/bin/env bash

ARGOWF_URL=https://raw.githubusercontent.com/argoproj/argo-workflows/master/USERS.md
ARGOCD_URL=https://raw.githubusercontent.com/argoproj/argo-cd/master/USERS.md
# Users who requested to avoid adding logos
BLACKLIST=("www.ea.com")

for url in $({ curl -s $ARGOWF_URL && curl -s $ARGOCD_URL; } | grep -Eo '(http|https)://[^/"]+' |  cut -d ")" -f1  | awk -F/ '{print $3}' | sort | uniq)
do
    if [[ " ${BLACKLIST[@]} " =~ "$url" ]]; then
        >&2 echo "Logo for $url is blacklisted"
    else
        if curl -s --fail https://logo.clearbit.com/$url > /dev/null; then
            echo $url
        else
            if ! grep -q "$url" src/assets/logos.json; then
                >&2 echo "No logo for $url. Please add logo manually to src/assets/logos.json"
            fi
        fi

    fi
done
