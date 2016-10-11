(function () {
	'use strict';

	//import
	let _template = window.fest['form/form.tmpl'];


	/**
	 * @class Form
	 * Компонента "Форма"
	 */
	class Form {

		/**
		 * constructor of class Form
		 * @param el - element to maintain and render
		 * @param data - some additional data
		 */
		constructor({el, data}) {
			this.el = el;
			this.data = data;

			this.render();
			this._initEvents();
		}

		/**
		 * Создаем HTML
		 * с использование шаблонизатора festa
		 */
		render () {
			this.el.innerHTML = _template(this.data);
		}


		/**
		 * Получение элемента формы по имени
		 * @param  {string} name
		 * @return {HTMLElement}
		 */
		getField (name) {
			return this.el.querySelector(`[name="${name}"]`);
		}


		/**
		* Развешиваем события
		*/
		_initEvents () {
			this.el.addEventListener('submit', this._onSubmit.bind(this));
		}


		/**
		 * Подписываемся
		 * @param  {string}   name
		 * @param  {Function} callback
		 */
		on (name, callback) {
			this.el.addEventListener(name, callback);
		}


		/**
		 * Создаем и диспатчим событие
		 * @param  {[String]} name [имя события]
		 * @param  {[Object]} data [дополнительные детали]
		 */
		trigger (name, data) {
			let widgetEvent = new CustomEvent(name, {
      			bubbles: true,
      			// detail - стандартное свойство CustomEvent для произвольных данных
      			detail: data
    		});

    		this.el.dispatchEvent(widgetEvent);
		}


		/**
		* Отправка данных формы (испускание кастомного события, на которое можно подписаться извне)
		* @param {Event} event
		* @private
		*/
		_onSubmit (event) {
			event.preventDefault();

			this.trigger('add', {
				task: this.getField('task').value
			});

			/*	The HTMLFormElement.reset() method restores a form element's default values.
				This method does the same thing as clicking the form's reset button. */
			event.target.reset();
		}

	}


	//export
	window.Form = Form;
})();