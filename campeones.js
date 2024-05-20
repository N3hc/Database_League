var botones;
var contenedorDeBotones;
$(document).ready(function(){
    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
    $('.header-list .box[category="Reset"]').addClass('ct_item-active');

    // FILTRANDO PRODUCTOS  ============================================
    $('.box').click(function(){
        var selectedCategories = $(this).attr('category').split(' '); // Dividir las categorías seleccionadas
        console.log(selectedCategories);

        // OCULTANDO PRODUCTOS =========================
        $('.character-border').css('transform', 'scale(0)');
        function hideProduct(){
            $('.character-border').hide();
        } setTimeout(hideProduct, 400);

        // MOSTRANDO PRODUCTOS =========================
        function showProduct() {
            selectedCategories.forEach(function(category) {
                $('.character-border').each(function() {
                    var categories = $(this).attr('category').split(' ');
                    if (categories.includes(category)) {
                        $(this).show().css('transform', 'scale(1)');
                    }
                });
            });
        } setTimeout(showProduct, 400);
    });

    // MOSTRANDO TODOS LOS PRODUCTOS =======================
    $('.box[category="Reset"]').click(function(){
        function showAll(){
            $('.character-border').show().css('transform', 'scale(1)');
        } setTimeout(showAll, 400);
    });
});

function searchChampion() {
    // Obtener el valor del input
    var input = document.getElementById('searchInput').value.toLowerCase();
    // Obtener todos los elementos de campeones
    var champions = document.getElementsByClassName('character-border');
    var found = false;

    // Recorrer todos los campeones y mostrar solo los que coinciden con la búsqueda
    for (var i = 0; i < champions.length; i++) {
        var champion = champions[i];
        if (champion.id.toLowerCase().includes(input)) {
            champion.style.display = 'block';
            champion.style.visibility = 'visible';
            champion.classList.remove('oculto');
            if (!found) {
                // Centramos el campeón encontrado
                champion.style.margin = 'auto';
                found = true;
            }
        } else {
            champion.style.display = 'none';
            champion.style.visibility = 'hidden';
            champion.classList.add('oculto');
        }
    }

    // Ajustar la caja de campeones para centrar el campeón encontrado
    var boxCampeones = document.getElementsByClassName('box_campeones')[0];
    if (found) {
        boxCampeones.style.justifyContent = 'center';
    } else {
        boxCampeones.style.justifyContent = 'center'; // Restablecer a la configuración predeterminada
    }
}

function resetSearchStyles() {
    // Obtener todos los elementos de campeones
    var champions = document.getElementsByClassName('character-border');

    // Recorrer todos los campeones y restablecer los estilos
    for (var i = 0; i < champions.length; i++) {
        var champion = champions[i];
        champion.style.display = '';
        champion.style.visibility = '';
        champion.style.margin = '';
        champion.classList.remove('oculto');
    }

    // Restablecer estilos de la caja de campeones
    var boxCampeones = document.getElementsByClassName('box_campeones')[0];
    boxCampeones.style.justifyContent = ''; // Restablecer a la configuración predeterminada
}

