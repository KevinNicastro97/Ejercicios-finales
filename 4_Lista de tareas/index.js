document.addEventListener('DOMContentLoaded', function () {
    const listaTareas = document.getElementById('lista-tareas');
    const formularioTarea = document.getElementById('form');
    const botonCompletarTodo = document.getElementById('boton-todo-completo');

    function agregarTarea(titulo, descripcion) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${titulo} - ${descripcion}
            <button class="boton-completar">Completar</button>
        `;
        listaTareas.appendChild(li);

        const botonCompletar = li.querySelector('.boton-completar');
        botonCompletar.addEventListener('click', function() {
            completarTarea(li);
        });
    }

    function completarTarea(elementoLista) {
        listaTareas.removeChild(elementoLista);
    }

    formularioTarea.addEventListener('submit', function (evento) {
        evento.preventDefault(); 

        const inputTitulo = document.getElementById('title');
        const inputDescripcion = document.getElementById('description');

        const titulo = inputTitulo.value.trim();
        const descripcion = inputDescripcion.value.trim();

        if (titulo !== '' && descripcion !== '') {
            agregarTarea(titulo, descripcion);
        }
    });

    botonCompletarTodo.addEventListener('click', function () {
        const todasLasTareas = document.querySelectorAll('#lista-tareas li');
        todasLasTareas.forEach(function (tarea) {
            completarTarea(tarea);
        });
    });

    agregarTarea('Hacer la compra', 'Leche, pan, agua');
});
