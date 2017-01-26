import * as angular from 'angular';

// Material
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

// Angular Components
import './components/ugly-button/ugly-button';

// Custom Material Themes
import { CustomTheme } from './themes/custom-theme';
import { AnotherTheme } from './themes/another-theme';


angular.module('libModule', ['uglyButtonModule'])
	.provider('customTheme', ['$mdThemingProvider', ($mdThemingProvider) => {
		return new CustomTheme($mdThemingProvider);
	}])
	.provider('anotherTheme', ['$mdThemingProvider', ($mdThemingProvider) => {
		return new AnotherTheme($mdThemingProvider);
	}]);

