import * as angular from 'angular';
import uiRouter from "angular-ui-router";
import '../lib/lib-module';

import { DocsController, docsComponent } from './docs/docs';
import { ROUTER_STATES } from './routes';

let $inject = ['$stateProvider'];

angular.module('app', [uiRouter, 'libModule'])
	.controller('DocsController', DocsController)
	.component('docs', docsComponent)
	.config(['$stateProvider', 'customThemeProvider', ($stateProvider, customThemeProvider) => {
		ROUTER_STATES.forEach(routerState => $stateProvider.state(routerState));
		customThemeProvider.enable();
	}]);
