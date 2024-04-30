// Obtener el ID del botón desde la URL
var urlParams = new URLSearchParams(window.location.search);
var idBoton = urlParams.get('id');

// Mostrar el ID del botón
let palabraCapitalizada = idBoton.charAt(0).toUpperCase() + idBoton.slice(1);
// URL del archivo JSON
const url = 'championFull.json';

// Suponiendo que tienes una función para obtener el nombre del campeón de otra página
const nombreCampeon = palabraCapitalizada;
const habilidadQ = "";
const habilidadW = "";
const habilidadE = "";
const habilidadR = "";
const habilidadPassiva = "";
const lore = "";

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

function obtenerInformacionHabilidad(campeonID, habilidadID) {
    cargarJSON(url)
        .then(data => {
            const campeon = data.data[campeonID];
            if (campeon) {
                const habilidad = campeon.spells.find(habilidad => habilidad.id === campeonID + habilidadID);
                if (habilidad) {
                    document.getElementById("nombreHabilidad").innerText = habilidad.name;
                    document.getElementById("descripcionHabilidad").innerText = habilidad.description;
                } else {
                    console.log('No se encontró información para el ID de la habilidad:', campeonID + habilidadID);
                }
            } else {
                console.log('No se encontró información para el ID del campeón:', campeonID);
            }
        })
        .catch(error => {
            console.error('Hubo un problema al obtener la información de la habilidad:', error);
        });
}

        // Asociar la función al evento clic de los botones de habilidades
        document.getElementById("imagenPassive").addEventListener("click", function() {
            obtenerInformacionHabilidad(palabraCapitalizada, "P");
        });

        document.getElementById("imagenQ").addEventListener("click", function() {
            obtenerInformacionHabilidad(palabraCapitalizada, "Q");
        });

        document.getElementById("imagenW").addEventListener("click", function() {
            obtenerInformacionHabilidad(palabraCapitalizada, "W");
        });

        document.getElementById("imagenE").addEventListener("click", function() {
            obtenerInformacionHabilidad(palabraCapitalizada, "E");
        });

        document.getElementById("imagenR").addEventListener("click", function() {
            obtenerInformacionHabilidad(palabraCapitalizada, "R");
        });

// Llamar a la función para obtener y mostrar imágenes
obtenerInformacionCampeon(nombreCampeon);
