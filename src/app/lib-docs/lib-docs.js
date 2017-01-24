import template from './lib-docs.html';
import { ROUTER_STATES } from '../routes';

class DocsController {
	// See https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#manually-identify-dependencies
	static $inject = ['$scope', '$mdSidenav'];

	constructor($scope, $mdSidenav) {
		$scope.openSideNav = () => {
			$mdSidenav('left').toggle();
		};

		$scope.routes = ROUTER_STATES;
	}
}

const docsComponent = {
	controller: DocsController,
	template: template
};


export { DocsController, docsComponent };
