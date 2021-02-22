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
                let listaPersonajes = objetoJSON.results;
                resolve(listaPersonajes);
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
        pintarPersonajes(personajes);
    } catch (error) {
        // getPersonajes.catch((error) => {
        //     alert(error);
        // })
        console.log(error);
    }
};

cargarPersonajes(1)

