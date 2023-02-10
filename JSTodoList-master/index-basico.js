// DAR LA ORDEN DE NO EJECUTAR JS HASTA QUE TODO EL HTML HAYA CARGADO
document.addEventListener('DOMContentLoaded', function () {
  // LA MAYORÍA DE VARIABLES EN JS SE DECLARAN COMO CONSTANTES.
  // EN OTRAS PALABRAS, EL VALOR QUE TIENEN ESTAS ALMACENADOS NO SE
  // VERÁ AFECTADO A FUTURO. DE LO CONTRARIO, USAR let.
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const table = document.getElementById('table');
  const alert = document.getElementById('alert');
  const btn = document.getElementById('add');
  let id = 1;

  function removeTodo(id){
    document.getElementById(id).remove();
  }

  function addTodo() {
    if (title.value === '' || description.value === ''){
      // MENSAJE DE ALERTA BOOTSTRAP
      alert.classList.remove('d-none');
      alert.innerText = 'Title and description are required';
      return;
    }

    // AÑADIENDO DE NUEVO EL d-none DE LA ALERTA
    alert.classList.add('d-none');
    const row = table.insertRow();
    row.setAttribute('id', id++)
    // LOS BACKTICS PERMITEN METER HTML EN VARIAS LÍNEAS
    // ABAJO EL HTML CORRESPONDIENTE A UNA TAREA.
    // LOS BOTONES DE EDITAR Y BORRAR NO VAN ACÁ.
    row.innerHTML = `
    <td>${title.value}</td>
    <td>${description.value}</td>
    <td class="text-center">
    <input type="checkbox">
    </td>
    <td class="text-right">
        <button class="btn btn-primary mb-1">
          <i class="fa fa-pencil"></i>
        </button>
      </td>
    `;

    // BOTÓN BORRAR
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
    removeBtn.onclick = function(e) {
      removeTodo(row.getAttribute('id')); 
    }
    row.children[3].appendChild(removeBtn);
  }

  //NO LLAMAR DIRECTAMENTE A LA FUNCIÓN EN UN .onclick
  //ES MUY PROBABLE QUE DEVUELVA ERROR
  btn.onclick = addTodo;
});
