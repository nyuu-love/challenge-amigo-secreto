// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista o Array para guardar los nombres
let amigos = []

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    if (amigos.includes(nombreAmigo.toUpperCase())) {
        alert('Este nombre ya está en la lista. Por favor, ingrese un nombre diferente.');
        inputAmigo.value = '';
        return;
    }

    amigos.push(nombreAmigo.toUpperCase());
    inputAmigo.value = '';
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.setAttribute('role', 'listitem');
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {

    if (amigos.length < 2) {
        alert('No hay suficientes amigos para realizar el sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let ganadorSorteo = amigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El ganador del sorteo es: "${ganadorSorteo}"`;
}

