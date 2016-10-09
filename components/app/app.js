(function () {
 	'use strict';

	//import
	let Menu = window.Menu;
	let Form = window.Form;

	let menu = new Menu({
		el: document.querySelector('.js-menu'),
		onPick (item) {
			console.log(item);
		},
		onRemove () {

		},
		data: {
			title: 'SIMPLE TO DO LIST',
			items: [
				{ task: 'Польский язык. Учебник (1ч)' },
				{ task: 'Приготовить еду на 3 дня' },
				{ task: 'Читать про модули CommonJS' },
				{ task: 'Польский язык. Memrise (1ч)' }
			]
		}
	});

	let form = new Form({
		el: document.querySelector('.js-form')
	});

	form.on('add', event => {
		menu.addItem(event.detail);
	});

})();