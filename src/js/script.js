$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow-l.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow-r.png"</button>',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    dots: true,
                    arrows: false
            }
            }
        ]
      });


      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });




      function toggleSlide(item) {
          $(item).each(function(i) {
            $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    // modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

   
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn('slow');
        })
    });














































/* var name = "Ivan";
let number = 7;
const pi = 3.14;


number = 4; */
/* pi = 5;

let leftBorderWidth = 200;  */

// number - числа 
// string - любая информация которую можно описать словами, нужны ковычки "" '' ``
//  true/false 
// null
// undefined - существует но не имеет значения

/* let obj =  {
    name: 'apple',
    color: 'green',
    weight: 200
} */

// Symbol

/* alert(1234) */

/* console.log(number) */
/* let answer = confirm("вам есть 19?");
console.log(answer) */

/* let answer = prompt("вам есть 19?", "");
console.log(answer); */

/* console.log(4 + 'fdd'); */

/* let isChecked = false,
    isClose = false;

/* console.log(isChecked && isClose) */

/* console.log(isChecked || isClose); */ 


/* if (2*1 == 8*1) {
    console.log('Верно')
} else {
    console.log('ошибка')
} */

/* let answer = confirm("есть ли вам 18?");
if (answer) {
    console.log('Go')
} else {
    console.log('Go away')
} */

/* const num = 50;

if (num < 49) {
    console.log('not correct')
} else if (num > 100) {
    console.log ('many')
} else {
    console.log('correct')
} */

/* for(let i = 1; i<8; i++) {
    console.log(i);
} */

/* function logging(a, b) {
    console.log( a + b )
}

/* logging(3, 5);

logging(6, 8); */

