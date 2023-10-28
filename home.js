const contenedorHomeCard = document.getElementById("contenedorHomeCard");
const arrayDeEventos = data.events;




// checkbox



// const contenedorCheckbox = document.getElementById('contenedorCheckbox');
// let countrys = [];
// countrys = Array.from (new Set(arrayUsuarios.map((usuario) => usuario.country)));



// funcion para pintar mis cards

function crearCards(arrayEventos) {
    for (let event of arrayEventos) {
        contenedorHomeCard.classList.add('d-flex', 'justify-content-around', 'flex-wrap', 'cardaround');
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
                    <p>${event.price}</p>
                    <a href="./details.html?_id=${event._id}" class="btn btn-dark">Details</a>
                </div>
            </div>
        </div>`)

        contenedorHomeCard.appendChild(creadorCards);
    }

}

crearCards(arrayDeEventos);




