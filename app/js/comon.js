$('.drop-down').bind('click', function() {
    $('.active').removeClass('not-active');
    $('.product-list__item-btn').addClass('not-active');
    $('.product-list__item-item').removeClass('not-active');
});