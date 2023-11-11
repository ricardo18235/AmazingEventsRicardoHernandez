import {
  contenedorUpcomingCard,
  arrayDeCurrentDate,
  crearCardsUpcomming,
  arrayMisCategorias,
  botonBusqueda,
  inputBusqueda,
  formulario,
  crearCards,
  arrayDeEventos,
  filtradoUpcomming,
} from "./funciones/modules.js";

// checkbox

contenedorCheckbox.classList.add(
  "d-flex",
  "justify-content-around",
  "flex-wrap",
  "w-75",
  "align-self-center",
  "pb-3"
);

contenedorCheckbox.innerHTML;

const filtroCategorias = (arr) => {
  return arr.filter((valor, indice) => arr.indexOf(valor) === indice);
};

arrayMisCategorias.forEach((category) => {
  const checkbox = document.createElement("div");
  checkbox.classList.add(
    "form-check",
    "d-flex",
    "text-white",
    "justify-content-center",
    "align-self-center"
  );
  checkbox.innerHTML = `<input class="form-check-input" type="checkbox" value="${category}" id="${
    arrayMisCategorias.indexOf(category) + 1
  }">
    <label class="form-check-label" for="${
      arrayMisCategorias.indexOf(category) + 1
    }">
      ${category}
    </label>`;

  contenedorCheckbox.appendChild(checkbox);
});

// funcion para pintar mis cards

crearCardsUpcomming(arrayDeEventos);

// search y checkbox

botonBusqueda.addEventListener("click", filtradoUpcomming);
formulario.addEventListener("change", filtradoUpcomming);
