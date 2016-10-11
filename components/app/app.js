(function () {
 	'use strict';

	//import
	let Menu = window.Menu;
	let Form = window.Form;
	let Model = window.Model;

	let menuModel = new Model({
		resource: '/data/menu.json'
	});

	console.log('menuModel: ', menuModel);

	let menu = new Menu({
		el: document.querySelector('.js-menu'),
		data: {
			title: 'SIMPLE TO DO LIST',
			items: [{task: 'to do smth'}]
		}
	});

	menuModel.on('update', (data) => {
		menu.setData(data);
		menu.render();
	});

	let form = new Form({
		el: document.querySelector('.js-form')
	});

	/* при получении события добавления от формы, инициируем обработчик добавления элемента в меню */
	form.on('add', (event) => {
			menu.addItem(event.detail);
		}
	);

	/* Проверка работы ajax-запроса */
	/*let xhr = new XMLHttpRequest();
	xhr.open('GET', '/package.json', true);

	xhr.onreadystatechange = function(event){
		if(xhr.readyState !== 4)return;

		if(xhr.status === 200){
			console.log('App version is: ', JSON.parse(xhr.responseText).version);
		}
	};

	xhr.send();*/

	// fetch данные с сервера
	menuModel.fetch();

})();