const contenedorHomeCard = document.getElementById("contenedorHomeCard");
const arrayDeEventos = data.events;


for (let event of arrayDeEventos) {
    contenedorHomeCard.classList.add('d-flex', 'justify-content-around', 'flex-wrap', 'cardaround');
    const creadorCards = document.createElement("div");
    creadorCards.classList.add('d-flex', 'justify-content-around', 'flex-wrap');
    creadorCards.innerHTML = (`
        <div class="card my-3" style="width: 18rem;">
            <img src=${event.image}" class="card-img-top" height="191"
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

    contenedorHomeCard.appendChild(creadorCards);
}

const barraBusqueda = document.getElementById('barraBusqueda')
barraBusqueda.classList.add('mx-auto', 'mx-lg-0')

const header = document.getElementById('header')
header.classList.add('sticky-top')



