export default class Filters {
    constructor() {
        this.form = document.getElementById('filters');
        this.btn = document.getElementById('search');
    }

    onClick(callback) {
        this.btn.onclick = (e)=> {
            //PREVENIR MANDAR AL SERVIDOR. MANEJAR TODO NOSOTROS
            e.preventDefault();
            const data = new FormData(this.form);
            callback({
                type: data.get('type'),
                words: data.get('words'),
            });
        }
    }
}