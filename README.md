# Argo website

Repository for argo website: http://argoproj.io/ .

## Run and deploy

* install nodejs, yarn and run `yarn install`
* clone repositories which contains markdown documents. Following location relative to `./argo-site` are expected:
 * https://github.com/argoproj/argo - ../go/src/github.com/argoproj/argo
 * https://github.com/argoproj/argo-cd - ../go/src/github.com/argoproj/argo-cd
 * https://github.com/argoproj/argo-events - ../go/src/github.com/argoproj/argo-events
 * https://github.com/argoproj/argo-ci - ../argo-ci

* run './scripts/copy-docs.sh'
* start local dev server using `yarn start` and check web site at http://localhost:8080

* To push changes to http://argoproj.io/ make sure you have write access to `https://github.com/argoproj/argo-site.git`
 repo and run: `yarn build && yarn deploy`
