
const comunidades = {
    "Andalucía": ["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"],
    "Cataluña": ["Barcelona", "Girona", "Lleida", "Tarragona"],
    "Madrid": ["Madrid"],
    "Valencia": ["Alicante", "Castellón", "Valencia"],
    "Galicia": ["A Coruña", "Lugo", "Ourense", "Pontevedra"],
    // Añade más comunidades y provincias aquí
};

let preguntas = [];
let correctas = 0;
let incorrectas = 0;
let preguntaActual = 0;

function generarPreguntas() {
    for (let comunidad in comunidades) {
        comunidades[comunidad].forEach(provincia => {
            preguntas.push({ provincia, comunidad });
        });
    }
    preguntas = preguntas.sort(() => Math.random() - 0.5);
}

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        const pregunta = preguntas[preguntaActual];
        document.getElementById('pregunta').innerText = `¿A qué comunidad autónoma pertenece la provincia de "${pregunta.provincia}"?`;
    } else {
        finalizarJuego();
    }
}

function seleccionarComunidad(comunidad) {
    const pregunta = preguntas[preguntaActual];
    if (comunidad === pregunta.comunidad) {
        correctas++;
        alert('¡Correcto! Sigue así para aprender más provincias.');
    } else {
        incorrectas++;
        alert('Incorrecto. ¡Intenta de nuevo!');
    }
    actualizarContador();
    preguntaActual++;
    mostrarPregunta();
}

function actualizarContador() {
    document.getElementById('correctas').innerText = correctas;
    document.getElementById('incorrectas').innerText = incorrectas;
    if (incorrectas >= 3) {
        finalizarJuego();
    }
}

function finalizarJuego() {
    if (incorrectas >= 3) {
        document.getElementById('resultado').innerText = 'Has cometido demasiados errores. ¡Inténtalo de nuevo!';
    } else {
        document.getElementById('resultado').innerText = '¡Felicidades! Has aprendido todas las provincias.';
    }
    document.getElementById('pregunta').style.display = 'none';
    document.getElementById('mapa').style.display = 'none';
}

generarPreguntas();
mostrarPregunta();
