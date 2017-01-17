import template from './lib-docs.html';

class DocsController {
	// See https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#manually-identify-dependencies
	static $inject = ['$scope', '$mdSidenav'];

	constructor($scope, $mdSidenav) {
		$scope.openSideNav = () => {
			$mdSidenav('left').toggle();
		};
	}
}

const docsComponent = {
	controller: DocsController,
	template: template
};


export { DocsController, docsComponent };
