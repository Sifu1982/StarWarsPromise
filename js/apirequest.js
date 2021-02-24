// https://swapi.dev/api/people/        lista de personajes
// https://swapi.dev/api/people/1/      info de 1 personaje en concreto
// https://swapi.dev/api/films/         lista de películas

const urlBase = 'https://swapi.dev/api/';


const getPersonajes = pPage => {
    let descargarPersonajes = new Promise((resolve, reject) => {
        let url = urlBase + 'people/?page=' + pPage;
        let peticion = new XMLHttpRequest();
        peticion.open('get', url, true);
        peticion.send();
        peticion.addEventListener('load', event => {
            if (event.target.status == 200) {
                let texto = event.target.responseText;
                let objetoJSON = JSON.parse(texto);
                // console.log(objetoJSON);
                let listaPersonajes = objetoJSON.results;
                let next = (objetoJSON.next != null) ? objetoJSON.next.split('=')[1] : '';
                let prev = (objetoJSON.previous != null) ? objetoJSON.previous.split('=')[1] : '';
                resolve([listaPersonajes, next, prev]);
            } else {
                reject('No se pudo obtener la lista de personajes');
            }
        });
    });
    return descargarPersonajes;
};

async function cargarPersonajes(pPage) {
    try {
        let personajes = await getPersonajes(pPage);
        let listaPersonajes = personajes[0];
        let paginaSiguiente = personajes[1];
        let paginaAnterior = personajes[2];
        pintarPersonajes(listaPersonajes, paginaSiguiente, paginaAnterior);
    } catch (error) {
        console.log(error);
    };
};

cargarPersonajes(1);

const getApiInfo = (pUrl) => {
    let obtenerInfo = new Promise((resolve, reject) => {
        let peticion = new XMLHttpRequest();
        peticion.open('get', pUrl, true);
        peticion.send();
        peticion.addEventListener('load', event => {
            if (event.target.status == 200) {
                let texto = event.target.responseText;
                let objetoJSON = JSON.parse(texto);
                resolve(objetoJSON);
            } else {
                reject('No se pudo obtener la info');
            }
        });
    });
    return obtenerInfo;
};

async function cargarInfo(pUrl, pTipo) {
    try {
        let objetoInfo = await getApiInfo(pUrl);
        if (pTipo == 'people') {
            pintarPersonaje(objetoInfo);
        } else if (pTipo == 'film') {
            pintarFilm(objetoInfo);
        }
    } catch (error) {
        console.log(error);
    }
};