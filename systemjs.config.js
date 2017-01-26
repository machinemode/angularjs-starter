'use strict';

System.config({
	baseURL: '/',
	defaultJSExtensions: true,
	transpiler: 'ts',
	typescriptOptions: {
		tsconfig: true
	},
	meta: {
		'angular': {
			format: 'global',
			exports: 'angular'
		},
		'typescript': {
			exports: 'ts'
		}
	},
	packages: {
		'src': {
			defaultExtension: 'ts',
			main: 'app/app-module',
			meta: {
				'*.html': {
					loader: 'text'
				}
			}
		}
	},
	map: {
		'angular': 'node_modules/angular/angular',
		'angular-animate': 'node_modules/angular-animate/angular-animate',
		'angular-aria': 'node_modules/angular-aria/angular-aria',
		'angular-material': 'node_modules/angular-material/angular-material',
		'angular-ui-router': 'node_modules/angular-ui-router/release/angular-ui-router',
		'text': 'node_modules/systemjs-plugin-text/text',
		'ts': 'node_modules/plugin-typescript/lib/plugin',
		'typescript': 'node_modules/typescript/lib/typescript'
	}
});
