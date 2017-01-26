import * as angular from 'angular';
import template from './ugly-button.html';

function UglyButtonDirective() {
	return {
		restrict: 'EA',
		scope: {},
		template: template,
		transclude: true
	}
};

angular.module('uglyButtonModule', ['ngMaterial'])
	.directive('uglyButton', UglyButtonDirective);
