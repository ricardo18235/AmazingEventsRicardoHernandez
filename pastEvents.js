const contenedorPastCard = document.getElementById("contenedorPastCard");
const arrayDeEventos = data.events;
const arrayDeCurrentDate = data.currentDate;

// Checkbox

let contenedorCheckbox = document.getElementById("contenedorCheckbox");
contenedorCheckbox.classList.add("d-flex", "justify-content-around", "flex-wrap", "w-75", "align-self-center", "pb-3");

contenedorCheckbox.innerHTML;

const misCategorias = data.events.map((evento) => evento.category);

const filtroCategorias = (arr) => {
    return arr.filter((valor, indice) => arr.indexOf(valor) === indice);
};

const arrayMisCategorias = filtroCategorias(misCategorias);

arrayMisCategorias.forEach((category) => {
    const checkbox = document.createElement("div");
    checkbox.classList.add("form-check", "d-flex", "text-white", "justify-content-center", "align-self-center");
    checkbox.innerHTML = `<input class="form-check-input" type="checkbox" value="${category}" id="${arrayMisCategorias.indexOf(category) + 1}">
    <label class="form-check-label" for="${arrayMisCategorias.indexOf(category) + 1}">
      ${category}
    </label>`;

    contenedorCheckbox.appendChild(checkbox);
});

// Función para pintar las cards de eventos pasados

function crearCards(arrayEventos) {
    for (let event of arrayEventos) {
        if (event.date < arrayDeCurrentDate) { // Cambiamos el operador para mostrar eventos pasados
            contenedorPastCard.classList.add('d-flex', 'justify-content-around', 'flex-wrap', 'cardaround');
            const creadorCards = document.createElement("div");
            creadorCards.classList.add('d-flex', 'justify-content-around', 'flex-wrap');
            creadorCards.innerHTML = (`
        <div class="card my-3" style="width: 18rem;">
            <img src="${event.image}" class="card-img-top" height="191"
            alt="food fair">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text text-truncate">${event.description}</p>
                <div class="d-flex justify-content-between">
                    <p>$ ${event.price}</p>
                    <a href="./details.html?_id=${event._id}" class="btn btn-dark">Details</a>
                </div>
            </div>
        </div>`);

            contenedorPastCard.appendChild(creadorCards);
        }
    }
}

crearCards(arrayDeEventos);

// Búsqueda y checkbox

let botonBusqueda = document.getElementById("botonBusqueda");
let inputBusqueda = document.getElementById("inputBusqueda");
let formulario = document.getElementById("contenedorCheckbox");

botonBusqueda.addEventListener('click', filtrado);
formulario.addEventListener('change', filtrado);

function filtrado() {
    contenedorPastCard.innerHTML = "";

    const valorInput = inputBusqueda.value.toLowerCase();
    const checked = document.querySelectorAll('input[type=checkbox]:checked');
    const arrayChecked = Array.from(checked);
    const nuevoArrayCategoryChecked = arrayChecked.map(checkbox => checkbox.value);

    if (nuevoArrayCategoryChecked.length === 0 && valorInput === "") {
        // No hay categorías seleccionadas y no hay valor en el campo de búsqueda
        // Mostrar todos los eventos pasados
        crearCards(arrayDeEventos.filter(evento => evento.date < arrayDeCurrentDate));
    } else {
        // Realizar el filtrado basado en categorías y búsqueda
        const resultados = arrayDeEventos.filter(evento => {
            if (nuevoArrayCategoryChecked.length > 0 && valorInput !== "") {
                return evento.date < arrayDeCurrentDate && nuevoArrayCategoryChecked.includes(evento.category) && evento.name.toLowerCase().includes(valorInput);
            } else if (nuevoArrayCategoryChecked.length > 0) {
                return evento.date < arrayDeCurrentDate && nuevoArrayCategoryChecked.includes(evento.category);
            } else if (valorInput !== "") {
                return evento.date < arrayDeCurrentDate && evento.name.toLowerCase().includes(valorInput);
            }
        });

        if (resultados.length > 0) {
            crearCards(resultados);
        } else {
            contenedorPastCard.innerHTML = `<h2 class="text-white">"Event not found..."</h2>`;
        }
    }
}
