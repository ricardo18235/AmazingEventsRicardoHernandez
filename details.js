const consultaURL = new URLSearchParams(window.location.search)
const id = consultaURL.get("_id")
const usuarios = data.events
const evento = usuarios.find(evento => evento._id === id)
const contenedorDetails = document.getElementById("contenedorDetails")

function funcionCards() {
    contenedorDetails.classList.add('container', 'shadow', 'd-flex');
    const creadorCards = document.createElement("div")
    creadorCards.classList.add('card');
    creadorCards.innerHTML = `
        <div class="row no-gutters">
            <div class="col-md-6">
                <img src="${evento.image}" class="card-img h-100 img-fluid"
                alt="Food Fair">
            </div>
        <div class="col-md-6">
        <div class="card-body">
            <h5 class="card-title"> ${evento.name}</h5>
            <p class="card-text"> ${evento.description}</p>
            <p class="card-text"><strong>Date:</strong> ${evento.date}</p>
            <p class="card-text"><strong>Category:</strong> ${evento.category}</p>
            <p class="card-text"><strong>Place:</strong> ${evento.place}</p>
            <p class="card-text"><strong>Capacity:</strong> ${evento.capacity}</p>
            <p class="card-text"> ${evento.assistance==null?"<strong>Estimate: </strong>"+evento.estimate:"<strong>Assistance: </strong>"+evento.assistance}</p>
            <p class="card-text"><strong>Price:</strong> $ ${evento.price}</p>
            </div>
        </div>
        </div>`
        contenedorDetails.appendChild(creadorCards);
}

funcionCards (evento)