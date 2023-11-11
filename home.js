import {
  contenedorHomeCard,
  arrayDeEventos,
  contenedorTarjetas,
  contenedorCheckbox,
  misCategorias,
  filtroCategorias,
  arrayMisCategorias,
  crearCards,
  filtrado,
  botonBusqueda,
  formulario,
} from "./funciones/modules.js";

// Crear un contenedor secundario para las tarjetas

contenedorTarjetas.classList.add(
  "d-flex",
  "justify-content-around",
  "flex-wrap",
  "cardaround"
);
contenedorHomeCard.appendChild(contenedorTarjetas);

// Checkbox

contenedorCheckbox.classList.add(
  "d-flex",
  "gap-2",
  "justify-content-around",
  "flex-wrap",
  "w-75",
  "align-self-center",
  "pb-3"
);
contenedorCheckbox.innerHTML;

arrayMisCategorias.forEach((category) => {
  const checkbox = document.createElement("div");
  checkbox.classList.add(
    "form-check",
    "gap-1",
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

// Función para pintar las tarjetas

crearCards(arrayDeEventos);

// Búsqueda y checkboxes

botonBusqueda.addEventListener("click", filtrado);
formulario.addEventListener("change", filtrado);
