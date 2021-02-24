let ulPersonajes = document.getElementById('personajes');
let btnPrev = document.querySelector('.botones div:first-child');
let btnNext = document.querySelector('.botones div:last-child');
let sectionPersonaje = document.getElementById('vistaPersonaje');

function pintarPersonajes(pLista, pSiguiente, pAnterior) {
    ulPersonajes.innerHTML = '';
    for (const personaje of pLista) {
        let li = document.createElement('li');
        let nombrePersonaje = document.createTextNode(personaje.name);
        let urlPersonaje = personaje.url;
        li.dataset.url = urlPersonaje;
        li.appendChild(nombrePersonaje);
        li.addEventListener('click', recogerInfoPersonaje);
        ulPersonajes.appendChild(li);
    };
    btnNext.dataset.page = pSiguiente;
    btnPrev.dataset.page = pAnterior;

    btnNext.style.display = (pSiguiente == '') ? 'none' : 'block';
    btnPrev.style.display = (pAnterior == '') ? 'none' : 'block';
};

btnNext.addEventListener('click', irPagina);

btnPrev.addEventListener('click', irPagina);

function irPagina(event) {
    let numeroPagina = event.target.dataset.page;
    cargarPersonajes(numeroPagina);
};

function recogerInfoPersonaje(event) {
    let url = event.target.dataset.url;
    cargarInfo(url, 'people');
};

function pintarPersonaje(pObjetoPersonaje) {
    sectionPersonaje.innerHTML = `  <h2>${pObjetoPersonaje.name}</h2>
                                    <ul>
                                        <li>Altura: ${pObjetoPersonaje.height}</li>
                                        <li>Peso: ${pObjetoPersonaje.mass}</li>
                                        <li>Color de piel: ${pObjetoPersonaje.skin_color}</li>
                                        <li>Color de pelo: ${pObjetoPersonaje.hair_color}</li>
                                        <li>Género: ${pObjetoPersonaje.gender}</li>
                                        <li>Año de nacimiento: ${pObjetoPersonaje.birth_year}</li>
                                    </ul>
                                    <h2>Películas en las que aparece</h2>
                                    <div class="peliculas"></div>`;
    // console.log(pObjetoPersonaje.films);
    let films = pObjetoPersonaje.films;
    for (const film of films) {
        cargarInfo(film, 'film');
    };
};

function pintarFilm(pObjetoFilm) {
    // console.log(pObjetoFilm);
    let divPeliculas = document.querySelector('.peliculas');
    divPeliculas.innerHTML += `  <article>
                                    <h3>${pObjetoFilm.title}</h3>
                                    <ul>
                                        <li>Episodio: ${pObjetoFilm.episode_id}</li>
                                        <li>Director: ${pObjetoFilm.director}</li>
                                        <li>Fecha de lanzamiento: ${pObjetoFilm.release_date}</li>
                                    </ul>
                                </article>`
}