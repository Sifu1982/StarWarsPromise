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
    /**
     * 
     * COMIENZO TRADUCTOR INGLÉS-ESPAÑOL
     * 
     */
    let altura = '';
    switch (pObjetoPersonaje.height) {
        case 'unknown':
            altura = 'Desconocida'
            break;
        default:
            altura = pObjetoPersonaje.height;
            break;
    };

    let peso = '';
    switch (pObjetoPersonaje.mass) {
        case 'unknown':
            peso = 'Desconocido'
            break;
        default:
            peso = pObjetoPersonaje.mass;
            break;
    };

    let colorPiel = '';
    switch (pObjetoPersonaje.skin_color) {
        case 'fair':
            colorPiel = 'Caucásica'
            break;
        case 'gold':
            colorPiel = 'Dorada'
            break;
        case 'white, blue':
            colorPiel = 'Blanca y azul'
            break;
        case 'light':
            colorPiel = 'Clara'
            break;
        case 'white, red':
            colorPiel = 'Blanca y roja'
            break;
        case 'green':
            colorPiel = 'Verde'
            break;
        case 'green-tan, brown':
            colorPiel = 'Marrón verdosa'
            break;
        case 'pale':
            colorPiel = 'Pálido'
            break;
        case 'metal':
            colorPiel = 'Metálico'
            break;
        case 'dark':
            colorPiel = 'Oscura'
            break;
        case 'brown mottle':
            colorPiel = 'Marrón moteada'
            break;
        case 'brown':
            colorPiel = 'Marrón'
            break;
        case 'grey':
            colorPiel = 'Gris'
            break;
        case 'mottled green':
            colorPiel = 'Verde moteada'
            break;
        case 'orange':
            colorPiel = 'Naranja'
            break;
        case 'blue, grey':
            colorPiel = 'Azul y gris'
            break;
        case 'grey, red':
            colorPiel = 'Gris y rojo'
            break;
        case 'red':
            colorPiel = 'Roja'
            break;
        case 'blue':
            colorPiel = 'Azul'
            break;
        case 'grey, blue':
            colorPiel = 'Gris y azul'
            break;
        case 'grey, green, yellow':
            colorPiel = 'Gris, verde y amarilla'
            break;
        case 'white':
            colorPiel = 'Blanca'
            break;
        case 'yellow':
            colorPiel = 'Amarilla'
            break;
        case 'tan':
            colorPiel = 'Bronceada'
            break;
        case 'fair, green, yellow':
            colorPiel = 'Amarilla verdosa clara'
            break;
        case 'silver, red':
            colorPiel = 'Roja plateada'
            break;
        case 'green, grey':
            colorPiel = 'Gris y verde'
            break;
        case 'red, blue, white':
            colorPiel = 'Roja, azul y blanca'
            break;
        case 'brown, white':
            colorPiel = 'Marrón y blanca'
            break;
        default:
            colorPiel = 'No disponible'
            break;
    };

    let colorPelo = '';
    switch (pObjetoPersonaje.hair_color) {
        case 'blond':
            colorPelo = 'Rubio'
            break;
        case 'none':
            colorPelo = 'Ninguno'
            break;
        case 'brown':
        case 'auburn':
            colorPelo = 'Castaño'
            break;
        case 'brown, grey':
            colorPelo = 'Castaño canoso'
            break;
        case 'black':
            colorPelo = 'Negro'
            break;
        case 'auburn, white':
            colorPelo = 'Castaño rojizo'
            break;
        case 'auburn, grey':
            colorPelo = 'Castaño canoso'
            break;
        case 'white':
            colorPelo = 'Blanco'
            break;
        case 'grey':
            colorPelo = 'Canoso'
            break;
        case 'blonde':
            colorPelo = 'Rubio'
            break;
        default:
            colorPelo = 'No disponible'
            break;
    };

    let genero = '';
    switch (pObjetoPersonaje.gender) {
        case 'male':
            genero = 'Hombre';
            break;
        case 'female':
            genero = 'Mujer'
            break;
        case 'hermaphrodite':
            genero = 'Hermafrodita'
            break;
        default:
            genero = 'No disponible'
            break;
    };

    let anioNacimiento = '';
    switch (pObjetoPersonaje.birth_year) {
        case 'unknown':
            anioNacimiento = 'Desconocido';
            break;
        default:
            anioNacimiento = pObjetoPersonaje.birth_year;
            break;
    };
    /**
     * 
     * FIN TRADUCTOR
     * 
     */

    sectionPersonaje.innerHTML = `  <h2>${pObjetoPersonaje.name}</h2>
                                    <ul>
                                        <li>Altura: ${altura} cm</li>
                                        <li>Peso: ${peso} kg</li>
                                        <li>Color de piel: ${colorPiel}</li>
                                        <li>Color de pelo: ${colorPelo}</li>
                                        <li>Género: ${genero}</li>
                                        <li>Año de nacimiento: ${anioNacimiento}</li>
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

    /**
     * 
     * Cambiar el formato de fecha
     * 
     */
    let fechaInglesa = pObjetoFilm.release_date.split('-');
    let fechaInglesaReverse = fechaInglesa.reverse();
    let fechaEspañola = fechaInglesaReverse[0] + '-' + fechaInglesaReverse[1] + '-' + fechaInglesaReverse[2];



    let divPeliculas = document.querySelector('.peliculas');
    divPeliculas.innerHTML += `  <article>
                                    <h3>${pObjetoFilm.title}</h3>
                                    <ul>
                                        <li>Episodio: ${pObjetoFilm.episode_id}</li>
                                        <li>Director: ${pObjetoFilm.director}</li>
                                        <li>Fecha de lanzamiento: ${fechaEspañola}</li>
                                    </ul>
                                </article>`
}