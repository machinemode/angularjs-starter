// Karma configuration
'use strict';
module.exports = function (config) {
	config.set({
		basePath: '.',
		frameworks: ['jasmine'],
		files: [
			{ pattern: 'node_modules/systemjs/dist/system.js', included: true, watched: false },
			{ pattern: 'systemjs.config.js', included: true, watched: false },
			{ pattern: 'tsconfig.json', included: false, watched: false },

			{ pattern: 'karma-bootstrap.js', included: true, watched: false },

			{ pattern: 'node_modules/**/*.ts', included: false, watched: false },
			{ pattern: 'node_modules/**/*.js', included: false, watched: false },
			{ pattern: 'node_modules/**/*.js.map', included: false, watched: false },

			{ pattern: 'src/**/*', included: false, watched: true, nocache: true }
		],
		proxies: {
			'/systemjs.config.js': '/base/systemjs.config.js',
			'/tsconfig.json': '/base/tsconfig.json',
			'/node_modules': '/base/node_modules',
			'/src': '/base/src'
		},
		colors: true,
		logLevel: config.LOG_INFO,
		browsers: ['Chrome', 'Firefox'],
		singleRun: true,
		concurrency: Infinity
	});
};
