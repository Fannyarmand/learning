# Repository
Basic repository for learning code.

## Pre-requisites

- Install nodejs
- Install yarn

To install yarn, it's really easy :

```shell script
# install yarn, it's a tool like npm
$ npm install -g yarn

# check yarn is working
$ yarn --version
```

## How to use this code

Everything is done through test... you must fill everything in `/lessons` and run your test to check if everything is OK.

```shell script
# run all test
$ yarn test

# list all test
$ yarn test:list

# execute specific test (take the name of the test from `yarn test:list`
$ yarn test:single Foo
```

