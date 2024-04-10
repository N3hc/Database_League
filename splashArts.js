document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.splash-art img').forEach((img, i) => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: 'center center', // Cuando el tope de la imagen toca la parte inferior del viewport
                end: 'bottom top', // Cuando el fondo de la imagen toca la parte superior del viewport
                scrub: 1 // Controla la velocidad de la animación en relación al scroll
            },
            opacity: 0, // Establece la opacidad inicial en 0
            duration: 1,
            delay: i * 0.5, // Añade un pequeño retraso para que las imágenes se animen una tras otra
            onStart: function() {
                gsap.to(img, {
                    opacity: 1,
                    duration: 0.1
                });
            }
        });
    });
});

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
