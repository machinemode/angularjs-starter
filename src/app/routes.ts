import uglyButtonDemo from './docs/templates/ugly-button.html';
import buttonDemo from './docs/templates/button.html';

export const ROUTER_STATES = [
	{
		name: 'ugly-button',
		url: '/ugly-button',
		template: uglyButtonDemo,
		data: {
			title: 'Ugly Button'
		}
	},
	{
		name: 'button',
		url: '/button',
		template: buttonDemo,
		data: {
			title: 'Button'
		}
	}
];
