let ulPersonajes = document.getElementById('personajes');

function pintarPersonajes(pLista) {
    ulPersonajes.innerHTML = '';
    for (const personaje of pLista) {
        let li = document.createElement('li');
        let nombrePersonaje = document.createTextNode(personaje.name);
        li.appendChild(nombrePersonaje);
        ulPersonajes.appendChild(li);
    }
};