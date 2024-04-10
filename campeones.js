var botones;
var contenedorDeBotones;

function char_inf() {
    window.location.href = 'char_inf.html';
};
function main() {
    window.location.href = 'main.html';
};
function campeones() {
    window.location.href = 'campeones.html';
};
function invocadores() {
    window.location.href = '';
};
function splashArts() {
    window.location.href = 'splashArts.html';
};

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los botones
    //contenedorDeBotones = document.getElementById("box_campeones");
    botones = document.querySelectorAll("button");
    
    // Agregar evento de clic al botón de filtro
    document.getElementById("filtro1").addEventListener("click", function() {
        filtrarBotonesPorID("Fighter") ;
    });

    document.getElementById("filtro2").addEventListener("click", function() {
        filtrarBotonesPorID("Tank");
    });

    document.getElementById("filtro3").addEventListener("click", function() {
        filtrarBotonesPorID("Support");
    });
    document.getElementById("filtro4").addEventListener("click", function() {
        filtrarBotonesPorID("Mage");
    });
    document.getElementById("filtro5").addEventListener("click", function() {
        filtrarBotonesPorID("Assasin");
    });
    document.getElementById("filtro6").addEventListener("click", function() {
        filtrarBotonesPorID("Marksman");
    });

    // Función para filtrar los botones según su ID
    function filtrarBotonesPorID(id) {
        // Ocultar todos los botones
        botones.forEach(function(boton) {
            var clasesBoton = boton.className.split(" ");
            if (clasesBoton.includes("header_letter") || clasesBoton.includes("box") || clasesBoton.includes(id)) {
                boton.style.display = "block";
            } else {
                boton.style.display = "none";
            }
        })
        ;
        
        /*botones.forEach(function(boton) {
            if (boton.getAttribute("id") === id){
                boton.style.display = "block";

            } else {
                boton.style.display = "none";
            }

        });*/

        // Mostrar solo los botones con el ID especificado
        //var botonesFiltrados = document.querySelectorAll("button#" + id);
        //botonesFiltrados.forEach(function(boton) {
            
        //});
    }
});
