(function(){
    "use strict";

    class Model {
        constructor({ resource, data = {} }){
            this.resourse = resource;

            this._handlers = [];
            this.setData(data);

        }

        setData(data){
            this._data = data;
            this.trigger('update', this._data);
        }

        getData(){
            return this._data;
        }

        fetch(){
            this._makeRequest('GET', this.resourse);
        }

        on(name, callback){
            if(!this._handlers[name]){
                this._handlers[name] = [];
            }

            this._handlers[name].push(callback);
        }

        trigger(name, data){
            if(this._handlers[name]){
                this._handlers[name].forEach( (callback, index) => callback(data) );
            }
        }

        _makeRequest(method, resourse){
            let xhr = new XMLHttpRequest();
            xhr.open(method, resourse, true);
            xhr.onreadystatechange = (e) => {
                if(xhr.readyState !== 4)return;

                /* еще обработать ошибку парсинга */
                if(xhr.status === 200){
                    let data = JSON.parse(xhr.responseText);
                    this.setData(data);
                    this.trigger('fetch', this.xhr);
                }
            };
            xhr.send();
        }
    }

    // export
    window.Model = Model;
})();