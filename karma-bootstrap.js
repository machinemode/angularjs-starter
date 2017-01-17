'use strict';

Error.stackTraceLimit = 10;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// Prevent karma from starting until all tests are loaded
__karma__.loaded = function () { };


// Find all *.spec.js/ts files to import
var regex = /^\/base\/(src\/.*\.spec)\.[jt]s$/;

var isSpecFile = function (path) {
	return regex.test(path);
};

var getModuleName = function (path) {
	var results = regex.exec(path);
	return results[1];
};

var specFiles = Object.keys(__karma__.files).filter(isSpecFile);

Promise.all(specFiles.map(function (path) {
	return System.import(getModuleName(path));
})).then(__karma__.start, __karma__.error);
