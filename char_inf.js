// Obtener el ID del botón desde la URL
var urlParams = new URLSearchParams(window.location.search);
var idBoton = urlParams.get('id');
var campActual;

// Mostrar el ID del botón
let palabraCapitalizada = idBoton.charAt(0).toUpperCase() + idBoton.slice(1);
// URL del archivo JSON
const url = 'championFull.json';

// Suponiendo que tienes una función para obtener el nombre del campeón de otra página
const nombreCampeon = palabraCapitalizada;

// Función para cargar el archivo JSON
function cargarJSON(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Hubo un problema con la petición fetch:', error);
        });
}

// Función para obtener y mostrar imágenes basadas en el nombre del campeón
function obtenerInformacionCampeon(nombreCampeon) {
    cargarJSON(url)
        .then(data => {
            const campeon = data.data[nombreCampeon];
            const imgCampeon = 'loading/' + nombreCampeon + '_0.jpg';
            const imgQcampeon = 'spell/' + campeon.spells[0].image.full;
            const imgWcampeon = 'spell/' + campeon.spells[1].image.full;
            const imgEcampeon = 'spell/' + campeon.spells[2].image.full;
            const imgRcampeon = 'spell/' + campeon.spells[3].image.full;
            const imgPasivecampeon = 'passive/' + campeon.passive.image.full
            if (campeon) {
                // Rutas de las imágenes
                const campeonImageUrl = imgCampeon;
                const campeonQImageUrl = imgQcampeon;
                const campeonWImageUrl = imgWcampeon;
                const campeonEImageUrl = imgEcampeon;
                const campeonRImageUrl = imgRcampeon;
                const campeonPassiveImageUrl = imgPasivecampeon;

                // Insertar imágenes en las cajas HTML
                document.querySelector('.imagenCampeon').style.backgroundImage = `url('${campeonImageUrl}')`;
                document.getElementById('imagenQ').innerHTML = `<img src="${campeonQImageUrl}" alt="${campeon.spells[0].name}">`;
                document.getElementById('imagenW').innerHTML = `<img src="${campeonWImageUrl}" alt="${campeon.spells[1].name}">`;
                document.getElementById('imagenE').innerHTML = `<img src="${campeonEImageUrl}" alt="${campeon.spells[2].name}">`;
                document.getElementById('imagenR').innerHTML = `<img src="${campeonRImageUrl}" alt="${campeon.spells[3].name}">`;
                document.getElementById('imagenPassive').innerHTML = `<img src="${campeonPassiveImageUrl}" alt="${campeon.passive.name}">`;
            } else {
                console.log('No se encontró información para el nombre del campeón:', nombreCampeon);
            }
        })
        .catch(error => {
            console.error('Hubo un problema al obtener las imágenes:', error);
        });
}

function obtenerTextoCampeones(palabraCapitalizada) {
    cargarJSON(url)
    .then(data => {
        const campeon = data.data[palabraCapitalizada];
        campActual = campeon;
        if (campeon) {
            // Mostrar el lore del campeón en el cuadro de texto
            document.getElementById('loreCampeon').innerText = campeon.lore;

            // Obtener las habilidades del campeón
            const habilidades = campeon.spells;
            const passive = campeon.passive

            // Asociar eventos de clic a los botones de habilidades
            document.getElementsByClassName('imagenCampeon').onclick = function() {
                cargarLore(campeon);
            };

            document.getElementById('imagenPassive').onclick = function() {
                mostrarHabilidad(passive);
            };
            document.getElementById('imagenQ').onclick = function() {
                mostrarHabilidad(habilidades[0]);
            };
            document.getElementById('imagenW').onclick = function() {
                mostrarHabilidad(habilidades[1]);
            };
            document.getElementById('imagenE').onclick = function() {
                mostrarHabilidad(habilidades[2]);
            };
            document.getElementById('imagenR').onclick = function() {
                mostrarHabilidad(habilidades[3]);
            };
        } else {
            console.log('No se encontró información para el campeón:', palabraCapitalizada);
        }
    })
    .catch(error => {
        console.error('Hubo un problema al obtener la información del campeón:', error);
    });
}

function mostrarHabilidad(habilidad) {
    document.getElementById('nombreHabilidad').innerText = habilidad.name;
    document.getElementById('descripcionHabilidad').innerText = habilidad.description;
    document.getElementById('loreCampeon').style.display = "none";
}
function cargarLore(){
    document.getElementById('nombreHabilidad').innerText = " ";
    //document.getElementById('descripcionHabilidad').style.display = "none";
    document.getElementById('descripcionHabilidad').innerText = campActual.lore;
}


function cargarContenido() {
    // Llamar a las funciones necesarias al cargar la página
    obtenerInformacionCampeon(nombreCampeon);
    obtenerTextoCampeones(nombreCampeon)
}
// Llamar a la función para obtener y mostrar imágenes
obtenerInformacionCampeon(nombreCampeon);