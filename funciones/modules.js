// index

export const contenedorHomeCard = document.getElementById("contenedorHomeCard");
export const arrayDeEventos = data.events;
export const contenedorTarjetas = document.createElement("div");
export let contenedorCheckbox = document.getElementById("contenedorCheckbox");
export const misCategorias = data.events.map((evento) => evento.category);
export const filtroCategorias = (arr) => {
  return arr.filter((valor, indice) => arr.indexOf(valor) === indice);
};

export const arrayMisCategorias = filtroCategorias(misCategorias);

export function crearCards(arrayEventos) {
  // Limpiar el contenedor de tarjetas
  contenedorTarjetas.innerHTML = "";

  for (let event of arrayEventos) {
    const creadorCards = document.createElement("div");
    creadorCards.classList.add("d-flex", "justify-content-around", "flex-wrap");
    creadorCards.innerHTML = `
        <div class="card my-3" style="width: 18rem;">
            <img src="${event.image}" class="card-img-top" height="191" alt="food fair">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text text-truncate">${event.description}</p>
                <div class="d-flex justify-content-between">
                    <p>$ ${event.price}</p>
                    <a href="./details.html?_id=${event._id}" class="btn btn-dark">Details</a>
                </div>
            </div>
        </div>`;

    contenedorTarjetas.appendChild(creadorCards);
  }
}

export let botonBusqueda = document.getElementById("botonBusqueda");
export let inputBusqueda = document.getElementById("inputBusqueda");
export let formulario = document.getElementById("contenedorCheckbox");

export function filtrado() {
  // Limpiar el contenedor de tarjetas
  contenedorTarjetas.innerHTML = "";

  const valorInput = inputBusqueda.value.toLowerCase();
  const checked = document.querySelectorAll("input[type=checkbox]:checked");
  const arrayChecked = Array.from(checked);
  const nuevoArrayCategoryChecked = arrayChecked.map(
    (checkbox) => checkbox.value
  );

  const resultados = arrayDeEventos.filter((evento) => {
    if (nuevoArrayCategoryChecked.length === 0 && valorInput !== "") {
      return evento.name.toLowerCase().includes(valorInput);
    } else if (nuevoArrayCategoryChecked.length > 0 && valorInput !== "") {
      return (
        nuevoArrayCategoryChecked.includes(evento.category) &&
        evento.name.toLowerCase().includes(valorInput)
      );
    } else if (nuevoArrayCategoryChecked.length === 0 && valorInput === "") {
      return true; // Mostrar todas las tarjetas si no hay filtros
    } else {
      return nuevoArrayCategoryChecked.includes(evento.category);
    }
  });

  if (resultados.length > 0) {
    crearCards(resultados);
  } else {
    // Mostrar mensaje si no se encontraron eventos
    contenedorTarjetas.innerHTML = `<h2 class="text-white">"Event not found..."</h2>`;
  }
}

// upcoming Events

export const contenedorUpcomingCard = document.getElementById(
  "contenedorUpcomingCard"
);
export const arrayDeCurrentDate = data.currentDate;

export function crearCardsUpcomming(arrayEventos) {
  for (let event of arrayEventos) {
    if (event.date > arrayDeCurrentDate) {
      contenedorUpcomingCard.classList.add(
        "d-flex",
        "justify-content-around",
        "flex-wrap",
        "cardaround"
      );
      const creadorCards = document.createElement("div");
      creadorCards.classList.add(
        "d-flex",
        "justify-content-around",
        "flex-wrap"
      );
      creadorCards.innerHTML = `
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
        </div>`;

      contenedorUpcomingCard.appendChild(creadorCards);
    }
  }
}

export function filtradoUpcomming() {
  contenedorUpcomingCard.innerHTML = "";

  const valorInput = inputBusqueda.value.toLowerCase();
  const checked = document.querySelectorAll("input[type=checkbox]:checked");
  const arrayChecked = Array.from(checked);
  const nuevoArrayCategoryChecked = arrayChecked.map(
    (checkbox) => checkbox.value
  );

  if (nuevoArrayCategoryChecked.length === 0 && valorInput === "") {
    // No hay categorías seleccionadas y no hay valor en el campo de búsqueda
    // Mostrar todos los eventos "upcoming"
    crearCardsUpcomming(
      arrayDeEventos.filter((evento) => evento.date > arrayDeCurrentDate)
    );
  } else {
    // Realizar el filtrado basado en categorías y búsqueda
    const resultados = arrayDeEventos.filter((evento) => {
      if (nuevoArrayCategoryChecked.length > 0 && valorInput !== "") {
        return (
          evento.date > arrayDeCurrentDate &&
          nuevoArrayCategoryChecked.includes(evento.category) &&
          evento.name.toLowerCase().includes(valorInput)
        );
      } else if (nuevoArrayCategoryChecked.length > 0) {
        return (
          evento.date > arrayDeCurrentDate &&
          nuevoArrayCategoryChecked.includes(evento.category)
        );
      } else if (valorInput !== "") {
        return (
          evento.date > arrayDeCurrentDate &&
          evento.name.toLowerCase().includes(valorInput)
        );
      }
    });

    if (resultados.length > 0) {
      crearCardsUpcomming(resultados);
    } else {
      contenedorUpcomingCard.innerHTML = `<h2 class="text-white">"Event not found..."</h2>`;
    }
  }
}

// past Events

export const contenedorPastCard = document.getElementById("contenedorPastCard");

export function crearCardsPast(arrayEventos) {
  for (let event of arrayEventos) {
    if (event.date < arrayDeCurrentDate) {
      // Cambiamos el operador para mostrar eventos pasados
      contenedorPastCard.classList.add(
        "d-flex",
        "justify-content-around",
        "flex-wrap",
        "cardaround"
      );
      const creadorCards = document.createElement("div");
      creadorCards.classList.add(
        "d-flex",
        "justify-content-around",
        "flex-wrap"
      );
      creadorCards.innerHTML = `
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
        </div>`;

      contenedorPastCard.appendChild(creadorCards);
    }
  }
}

export function filtradoPast() {
  contenedorPastCard.innerHTML = "";

  const valorInput = inputBusqueda.value.toLowerCase();
  const checked = document.querySelectorAll("input[type=checkbox]:checked");
  const arrayChecked = Array.from(checked);
  const nuevoArrayCategoryChecked = arrayChecked.map(
    (checkbox) => checkbox.value
  );

  if (nuevoArrayCategoryChecked.length === 0 && valorInput === "") {
    // No hay categorías seleccionadas y no hay valor en el campo de búsqueda
    // Mostrar todos los eventos pasados
    crearCardsPast(
      arrayDeEventos.filter((evento) => evento.date < arrayDeCurrentDate)
    );
  } else {
    // Realizar el filtrado basado en categorías y búsqueda
    const resultados = arrayDeEventos.filter((evento) => {
      if (nuevoArrayCategoryChecked.length > 0 && valorInput !== "") {
        return (
          evento.date < arrayDeCurrentDate &&
          nuevoArrayCategoryChecked.includes(evento.category) &&
          evento.name.toLowerCase().includes(valorInput)
        );
      } else if (nuevoArrayCategoryChecked.length > 0) {
        return (
          evento.date < arrayDeCurrentDate &&
          nuevoArrayCategoryChecked.includes(evento.category)
        );
      } else if (valorInput !== "") {
        return (
          evento.date < arrayDeCurrentDate &&
          evento.name.toLowerCase().includes(valorInput)
        );
      }
    });

    if (resultados.length > 0) {
      crearCardsPast(resultados);
    } else {
      contenedorPastCard.innerHTML = `<h2 class="text-white">"Event not found..."</h2>`;
    }
  }
}
