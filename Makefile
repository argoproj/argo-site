build:
	docker run --rm -v `pwd`:/work -w /work node:lts-alpine sh -c 'yarn install && yarn build'
