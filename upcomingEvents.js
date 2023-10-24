const contenedorUpcomingCard = document.getElementById('contenedorUpcomingCard')
const arrayDeEventos = data.events
const arrayDeCurrentDate = data.currentDate

for (const event of arrayDeEventos) {
    if (event.date > arrayDeCurrentDate) {
        contenedorUpcomingCard.classList.add('d-flex', 'justify-content-around', 'flex-wrap', 'cardaround')
        const creadorCards = document.createElement('div')
        creadorCards.classList.add('d-flex', 'justify-content-around', 'flex-wrap')
        creadorCards.innerHTML = (
            `<div class="card my-3" style="width: 18rem;">
                <img src=${event.image} class="card-img-top" height="191"
                alt="food fair">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text text-truncate">${event.description}</p>
                    <div class="d-flex justify-content-between">
                        <p>${event.price}</p>
                        <a href="#" class="btn btn-dark">Details</a>
                    </div>
                </div>
            </div>`)
        contenedorUpcomingCard.appendChild(creadorCards)
    }
}

// const barraBusqueda = document.getElementById('barraBusqueda')
// barraBusqueda.classList.add('mx-auto', 'mx-lg-0')

const header = document.getElementById('header')
header.classList.add('sticky-top')

// checkbox

const contenedorCheckbox = document.getElementById('contenedorCheckbox');
const arrayDeCheckbox = data.events;
const categoriasUnicas = new Set();

for (const event of arrayDeCheckbox) {
    const categoria = event.category;

    if (!categoriasUnicas.has(categoria)) {
        categoriasUnicas.add(categoria);

        contenedorCheckbox.classList.add('container-fluid', 'pt-1', 'pb-1', 'd-flex', 'flex-md-column', 'flex-wrap', 'flex-lg-row', 'flex-sm-column', 'justify-content-between', 'align-items-center', 'justify-content-center', 'text-center');
        const creadorCheckbox = document.createElement("div");
        creadorCheckbox.classList.add('row', 'd-flex', 'align-items-center');
        creadorCheckbox.innerHTML = (`
            <div class="col-md-2 col-6">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="${categoria}">
                    <label class="form-check-label text-white" for="${categoria}">
                        ${categoria}
                    </label>
                </div>
 
            </div>`
        );

        contenedorCheckbox.appendChild(creadorCheckbox);
    }
}

// barra
const barraBusqueda = document.createElement("div");
barraBusqueda.classList.add('col-8', 'col-md-4', 'col-sm-6', 'col-lg-2', 'mx-auto', 'mx-lg-0');
barraBusqueda.innerHTML = (`
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="searchButton">
        <button class="btn btn-dark" type="button" id="searchButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                </path>
            </svg>
        </button>
    </div>`);
contenedorCheckbox.appendChild(barraBusqueda);