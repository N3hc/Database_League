    // Obtener el ID del botón desde la URL
//    var urlParams = new URLSearchParams(window.location.search);
//  var idBoton = urlParams.get('id');

    // Mostrar el ID del botón
//  let palabraCapitalizada = idBoton.charAt(0).toUpperCase() + idBoton.slice(1);
    // URL del archivo JSON
//const url = 'championFull.json';

// Suponiendo que tienes una función para obtener el nombre del campeón de otra página
//const nombreCampeon = palabraCapitalizada;
const nombreCampeon = "Aatrox";

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
function obtenerImagenesPorNombre(nombreCampeon) {
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
                document.getElementById('imagenCampeon').innerHTML = `<img src="${campeonImageUrl}" alt="${nombreCampeon}">`;
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
// Llamar a la función para obtener y mostrar imágenes
obtenerImagenesPorNombre(nombreCampeon);