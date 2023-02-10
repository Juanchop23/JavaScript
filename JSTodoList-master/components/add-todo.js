import Alert from './alert.js';

// AÑADIENDO COSAS

export default class AddTodo {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');

        this.alert = new Alert('alert');
    }

    // callback SUELE SER EL NOMBRE DE LAS FUNCIONES QUE SE RECIBEN DESPUÉS.
    // NO SE SABE CUANDO.
    onClick(callback) {
        this.btn.onclick = () => {
            if (title.value === '' || description.value === '') {
                //ALERT
                this.alert.show('Title and description are required');
            } else {
                this.alert.hide();
                callback(this.title.value, this.description.value);
            }
        }
    }
}