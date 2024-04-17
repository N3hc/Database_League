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
