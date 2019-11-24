$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev" style="outline: none"><img src="icons/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next" style="outline: none"><img src="icons/right_arrow.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      }); // ТАБЫ

/*     $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault(); //отменяет стандартное поведение ссылки
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault(); //отменяет стандартное поведение ссылки
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    }); */

    function toggleSLide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault(); //отменяет стандартное поведение ссылки
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }
    toggleSLide ('.catalog-item__link');
    toggleSLide ('.catalog-item__back');

});