# Parties Data

Description to be written sometime soon.

### Technology

This project runs on [Node.js](https://nodejs.org/en/) with [Express](https://expressjs.com/), [TypeScript](https://www.typescriptlang.org/) and [Sass](https://sass-lang.com/). Modules are bundled with [Webpack](https://webpack.js.org/), using [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader). Unit testing is performed with [Jest](https://jestjs.io/), end-to-end testing with [TestCafe](https://github.com/DevExpress/testcafe). Linting is carried out with [TSLint](https://palantir.github.io/tslint/).

`node-sass`, `testcafe` and `typescript` are required to be installed globally for certain command-line entries to work.

```sh
# To run all unit tests
$ npm test
# To run e2e tests
$ npm install -g testcafe
$ testcafe {firefox|chrome} tests/e2e/e2e.test.ts
```

### License

MIT License