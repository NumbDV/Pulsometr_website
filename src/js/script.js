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

    // Modal
    $('[data-modal=consultation]').on('click', function() { // обращение к кнопке для вызова
        $('.overlay,#consultation').fadeIn();               // оверлэй и консультацию
    });

    /* Закрытие выбранных окон при нажатии на крестик */
    $('.modal__close').on('click', function () { 
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });


    /* Вызов формы заказа при клике на кнопку "купить" */
    /* each отвечает за перебор каждоый кнопки с классом button_buy, 
    i - отвчает за номер эл-та по порядку. */
    $('.button_buy').each(function(i) {
        $(this).on('click', function() { // this обращается к кнопке button_buy
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());  // внутри мод. окна order есть класс modal__descr
            $('.overlay, #order').fadeIn(); // eq перебирает i и помещает текст из catalog-item__subtitle в modal__descr
        });  
    });


    
    /* Валидация. Требует плагин и файл jquery.validate.min.js.
    Работает только с одним элементом класса. Чтобы работали все формы одного класса
    необходимо добавлять id к каждой форме*/
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name:  {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Введите минимум {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введён адрес почты"
                }
              }
        }); //ищет блок с id consultation и проводит валидацию формы внутри этого блока
    }
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-9999");
});