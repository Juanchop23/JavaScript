// EN JS PARA IMPORTAR COSAS SUCEDE QUE PRIMERO HAY QUE EXPORTARLAS
import Model from './model.js';
import View from './view.js';




// DAR LA ORDEN DE NO EJECUTAR JS HASTA QUE TODO EL HTML HAYA CARGADO
document.addEventListener('DOMContentLoaded', ()=> {
    const model = new Model();
    const view = new View();
    model.setView(view);
    view.setModel(model);

    view.render();
});