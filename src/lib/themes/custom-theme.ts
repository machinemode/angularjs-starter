import * as angular from 'angular';
import ThemeProvider from './theme-provider';

export class CustomTheme implements ThemeProvider {

	private themingProvider;

	static $inject = ['$mdThemingProvider'];

	constructor($mdThemingProvider) {
		this.themingProvider = $mdThemingProvider;
	}

	$get() {
		return {};
	}

	enable() {
		this.themingProvider.theme('default')
			.primaryPalette('pink')
			.accentPalette('orange');
	}
}
