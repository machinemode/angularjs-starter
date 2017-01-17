# angularjs-starter

Starter project for messing around with AngularJS (Angular 1).

## Getting Started

### Install dependencies
```
$ npm install
```
### Run the app
```
$ npm start
```
### Sass compilation
```
$ npm run sass
```
### Bundle & minify into dist/
```
$ npm run bundle
```
### Run Unit Tests
```
$ npm test
```

When running under lite-server:
* [http://localhost:8080/src/index.html](http://localhost:8080/src/index.html) Will transpile in the browser
* [http://localhost:8080/dist/index.html](http://localhost:8080/dist/index.html) Will serve the bundle (if bundled)

The app is pretty ugly and bare. The point was to wire up an app using:
* [AngularJS](https://angularjs.org/)
* [AngularUI Router](https://ui-router.github.io/ng1/) for SPA routing
* [Angular Material](https://material.angularjs.org/latest/) for pretty UI Components
* [SystemJS](https://github.com/systemjs/systemjs) for module loading, transpiling, and bundling
* [Sass](http://sass-lang.com/)
* [Jasmine](https://jasmine.github.io/) & [Karma](https://karma-runner.github.io/) for Unit testing
