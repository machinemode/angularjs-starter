import * as angular from 'angular';
import uiRouter from "angular-ui-router";
import '../lib/components/lib-module';

import { DocsController, docsComponent } from './lib-docs/lib-docs.js';
import { ROUTER_STATES } from './routes';

let $inject = ['$stateProvider'];

angular.module('app', [uiRouter, 'libModule'])
	.controller('DocsController', DocsController)
	.component('libDocs', docsComponent)
	.config(['$stateProvider', ($stateProvider) => {
		ROUTER_STATES.forEach(routerState => $stateProvider.state(routerState));
	}]);
