// EN JS LA POO ES ALGO COMPLICADA. NO HAY NI OBJETOS
// NI CLASES, PERO A LA VEZ SÍ LOS HAY. class ES UNA FUNCIÓN,
// POR ENDE ES UN OBJETO PERO EN EL MUNDO REAL NO CUENTA.



// EL MODELO SIMULA UNA BD. A LOS TODO LES VA A SIGNAR UNOS ID
// Y NOS LOS VA A DEVOLVER EN LA VISTA PARA HACER EL PROCESO
// DE CRUD.
export default class Model {
    constructor() {
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos')); // SIMULA LA BD
        if(!this.todos || this.todos.length < 1){
            this.todos = [
                {
                id: 0,
                title: 'Learn JS',
                description: 'Watch JS tutorials',
                completed: false,
            }
        ]
        this.currentId = 1;
        } else {
            this.currentId = this.todos[this.todos.length -1].id +1;
        }
    }

    setView(view){
        this.view = view;
    }

    //GUARDANDO INFO DENTRO DEL NAVEGADOR
    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodos() {
        return this.todos.map((todo)=> ({...todo}));
    }

    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }

    //HACIENDO FUNCIONAR LAS CHECKBOX
    toggleCompleted(id) {
        const index = this.findTodo(id);
        const todo = this.todos[index];
        //INVIRTIENDO EL COMPLETED. SI ES FALSO PASAR A VERDADERO, Y VISCEVERSA
        todo.completed = !todo.completed;
        this.save();
    }

    //EDITAR EL TODO
    editTodo(id, values) {
        const index = this.findTodo(id);
        Object.assign(this.todos[index], values);
        this.save();
    }

    //GENERANDO LOS DATOS PARA LA BD SIMULADA
    // EN JS MODERNO SI EL VALOR DE UNA PROPIEDAD TIENE
    // EL MISMO NOMBRE QUE ESTA, AUTOMÁTICAMENTE SE ACORTA
    // EL CÓDIGO PARA EVITAR REDUNDANCIAS.
    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        }

        this.todos.push(todo);
        console.log(this.todos);
        //ANTES DE DEVOLVER LOS TODOS, QUE LOS GUARDE
        this.save();

        //PARA QUE SALGAN LOS DATOS DADOS EN JSON
        return {...todo};
    }


    removeTodo(id) {
        const index = this.findTodo(id);
        //ESPECIFICANDO CUÁNTOS ELEMENTOS SE VAN A BORRAR
        //splice ES PARA DARLE UN ÍNDICE Y A PARTIR DE AHÍ CUÁNTOS ELEMENTOS
        //BORRAR
        this.todos.splice(index, 1);
        this.save();
    }
}