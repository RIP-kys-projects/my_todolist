(function () {
 	'use strict';

	//import
	let Menu = window.Menu;
	let Form = window.Form;
	let itemsData = window.itemsData;

	let menu = new Menu({
		el: document.querySelector('.js-menu'),
		onPick (item) {
			console.log(item);
		},
		onRemove () {

		},
		data: {
			title: 'SIMPLE TO DO LIST',
			items: itemsData
		}
	});

	let form = new Form({
		el: document.querySelector('.js-form')
	});

	form.on('add', event => {
		menu.addItem(event.detail);
	});

})();