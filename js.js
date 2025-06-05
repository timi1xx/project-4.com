const ua = navigator.userAgent;

let clicked = null;
let clicked_button = null

if (/mobile/i.test(ua)) {
    console.log("Пользователь зашел с телефона 📱");
} else if (/tablet/i.test(ua)) {
    console.log("Пользователь зашел с планшета 📲");
} else {
    console.log("Пользователь зашел с компьютера 🖥️");
}
$(document).ready(function() {
    // $("#home-image").click(function() {
    //     $('html, body').animate({
    //         scrollTop: $(".menu").offset().top
    //     }, 1000);
    // });
    // $('#products-image').click(function () {
    //     $('html, body').animate({
    //         scrollTop: $(".section-wrapper").offset().top
    //     }, 1000);
    // })
    // $('#categories-image').click(function () {
    //     $('html, body').animate({
    //         scrollTop: $(".categories-section").offset().top
    //     }, 2000);
    // })
    // $('#why-us_image').click(function () {
    //     $('html, body').animate({
    //         scrollTop: $(".why-us-section").offset().top
    //     }, 2000);
    // })
    // $('#reviews-image').click(function () {
    //     $('html, body').animate({
    //         scrollTop: $(".reviews-section-name-wrapper").offset().top
    //     }, 2000);
    // })
    // $('#contact-image').click(function () {
    //     $('html, body').animate({
    //         scrollTop: $(".label-2-text").offset().top
    //     }, 2000);
    // })
    //

    $(".link-home").click(function() {
        $('html, body').animate({
            scrollTop: $(".menu").offset().top
        }, 1000);
    });
    $('.link-products').click(function () {
        $('html, body').animate({
            scrollTop: $(".section-wrapper").offset().top
        }, 1000);
    })
    $('.link-categories').click(function () {
        $('html, body').animate({
            scrollTop: $(".categories-section").offset().top
        }, 2000);
    })
    $('.link-why').click(function () {
        $('html, body').animate({
            scrollTop: $(".why-us-name").offset().top
        }, 2000);
    })
    $('.link-reviews').click(function () {
        $('html, body').animate({
            scrollTop: $(".text-wrapper").offset().top
        }, 2000);
    })
    $('.link-contact').click(function () {
        $('html, body').animate({
            scrollTop: $(".label-2-text").offset().top
        }, 2000);
    })
});
// main code!!!
$(document).ready(function () {
    // меню
    if (/mobile/i.test(ua)) {
        $('#menu-image').css({
            'position:': 'fixed',
            'width': '70px',
            'height': '70px',
            'top': '10px',
            'left': '785px',
        });
    }
    // Обработчик клика выносим за пределы scroll
    $('#arrow-image').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500); // плавный скролл вверх
        $(this).fadeOut(); // скрываем стрелку после нажатия
    });

    // Отдельно обрабатываем скролл
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > 100) {
            $('#arrow-image').fadeIn();
        } else {
            $('#arrow-image').fadeOut();
        }
    });

    // home
    $('.home').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '810px',
                'top': '-5px',
                'width': '130px',
                'height': '110px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }

        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '15px',
                'width': '70px',
                'height':'60px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1015px',
                'top': '20px',
                'width': '50px',
                'height': '45px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1080px',
                'top': '15px',
                'width': '70px',
                'height': '55px',
                'z-index': '12',
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        $('#home-image').css({
            'position': 'fixed',
            'left': '770px',
            'top': '5px',
            'width': '75px',
            'height': '75px',
            'z-index': '10'
        }).attr('src', 'IMAGES/home_1.png');

        clicked = 'home';
    });

    // products
    $('.products').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }

        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '15px',
                'width': '70px',
                'height':'60px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1015px',
                'top': '20px',
                'width': '50px',
                'height': '45px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1080px',
                'top': '15px',
                'width': '70px',
                'height': '55px',
                'z-index': '12', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        $('#products-image').css({
            'position': 'fixed',
            'left': '855px',
            'top': '20px',
            'width': '45px',
            'height': '45px',
            'z-index': '10'
        }).attr('src', 'IMAGES/cup_2.png');

        clicked = 'products';
    });

    // categories
    $('.categories').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        // сброс всего, если активно
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '810px',
                'top': '-5px',
                'width': '130px',
                'height': '110px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }

        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1015px',
                'top': '20px',
                'width': '50px',
                'height': '45px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1080px',
                'top': '15px',
                'width': '70px',
                'height': '55px',
                'z-index': '12',
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        $('#categories-image').css({
            'position': 'fixed',
            'left': '910px',
            'top': '11px',
            'width': '75px',
            'height': '65px',
            'z-index': '1'
        }).attr('src', 'IMAGES/categories_2.png');

        clicked = 'categories';
    });
    
    // why_us
    $('.why_us').click(function (e) {
        e.stopPropagation()
        e.preventDefault()

        // сброс всего, есл активно
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '810px',
                'top': '-5px',
                'width': '130px',
                'height': '110px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }
        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '15px',
                'width': '70px',
                'height':'60px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1080px',
                'top': '15px',
                'width': '70px',
                'height': '55px',
                'z-index': '12',
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }
        $('#why-us_image').css({
            'position': 'fixed',
            'left': '1010px',
            'top': '20px',
           'width': '53px',
            'height': '42px',
        }).attr('src', 'IMAGES/why-us_2.png')
        clicked = 'why_us';
    });
    
    // reviews
    $('.reviews').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        // сброс всего, если активно
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '810px',
                'top': '-5px',
                'width': '130px',
                'height': '110px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }
        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '15px',
                'width': '70px',
                'height':'60px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1015px',
                'top': '20px',
                'width': '50px',
                'height': '45px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }
        $('#reviews-image').css({
            'position': 'fixed',
            'left': '1050px',
            'top': '15px',
            'width': '135px',
            'height': '60px',
        }).attr('src', 'IMAGES/reviews_2.png');

        clicked = 'reviews';
    });

    // contact
    $('.contact').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        // сброс всего, если активно
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '810px',
                'top': '-5px',
                'width': '130px',
                'height': '110px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }
        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '15px',
                'width': '70px',
                'height':'60px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1015px',
                'top': '20px',
                'width': '50px',
                'height': '45px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1080px',
                'top': '15px',
                'width': '70px',
                'height': '55px',
                'z-index': '12', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        $('#contact-image').css({
            'position': 'fixed',
            'left': '1140px',
            'top': '13px',
            'width': '120px',
            'height': '55px',
        }).attr('src', 'IMAGES/contact_2.png');

        clicked = 'contact';
    });

    // Сброс по клику все
    $(window).click(function () {
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '790px',
                'top': '19px',
                'width': '40px',
                'height': '40px',
                'z-index': '1'
            }).attr('src', 'IMAGES/home_2.png');
        }

        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '810px',
                'top': '-5px',
                'width': '130px',
                'height': '110px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }

        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '910px',
                'top': '16px',
                'width': '70px',
                'height':'60px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1015px',
                'top': '20px',
                'width': '50px',
                'height': '45px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1080px',
                'top': '15px',
                'width': '70px',
                'height': '55px',
                'z-index': '12',
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        clicked = null;
    });
    // COFFEE ANIMATION!!!
    $(document).ready(function(){
        let coffeeImages = [
            'IMAGES/arabica.png',
            'IMAGES/robusta.png',
            'IMAGES/liberica.png',
            'IMAGES/excelsa.png'
        ];
    
        let container = $('.coffee-animation');
        let index = 0;
    
        function animateNextPack() {
            if (index >= coffeeImages.length) index = 0;
    
            let $img = $('<img>')
                .attr('src', coffeeImages[index])
                .addClass('coffee-pack')
                .css({ left: '100%' }) // начальная позиция — справа за экраном
                .appendTo(container);
    
            $img.animate({ left: '35%' }, 1000, 'swing', function() {
                setTimeout(function() {
                    $img.animate({ left: '-40%' }, 1000, 'swing', function() {
                        $img.remove(); // удаляем картинку после выхода
                        index++;
                        setTimeout(animateNextPack, 500); // пауза перед следующей
                    });
                }, 1000); // пауза в центре
            });
        }
    
        animateNextPack(); // запуск
    });
});
// categories-section
$(document).ready(function () {
    $('.product-1-button').click(function() {
        $('.categorie-image').attr('src', 'IMAGES/white.png');
        $('.categorie-name').text('White Coffee');
        $('.categorie-text').text('White coffee is made from lightly roasted or unroasted beans, giving it a much lighter color and a milder, smoother taste compared to traditional coffee. It retains more antioxidants due to the minimal roasting process, making it a healthier option for some. The flavor is less bitter and often described as nutty or earthy. Because of its low acidity, white coffee is ideal for those with sensitive stomachs. Its unique profile has made it increasingly popular among coffee enthusiasts seeking something different.');
    });
    $('.product-2-button').click(function () {
        $('.categorie-image').attr('src', 'IMAGES/black.png');
        $('.categorie-name').text('Black Coffee');
        $('.categorie-text').text('Black coffee is a popular beverage loved by many for its bold and robust flavor. Unlike other coffee drinks, it is made by brewing coffee beans without adding milk or sugar, allowing the natural taste to shine through. Some people prefer black coffee for its rich, intense taste and energizing effect, as it contains a higher concentration of caffeine. Whether enjoyed in the morning or as an afternoon pick-me-up, black coffee is a simple yet satisfying choice for coffee lovers. Its versatility also makes it an ideal base for various coffee drinks, such as iced coffee or espresso.');
    });
    $('.product-3-button').click(function() {
        $('.categorie-image').attr('src', 'IMAGES/ground.png');
        $('.categorie-name').text('Ground Coffee');
        $('.categorie-text').text('Ground coffee is made by grinding roasted coffee beans into fine particles, making it ready for brewing in methods like drip, French press, or espresso. It offers a rich aroma and flavor that captures the essence of freshly roasted beans. Many people prefer ground coffee for its convenience and quick preparation. It can vary in grind size, which affects the strength and taste of the final cup. Ground coffee remains one of the most popular forms of coffee used in homes and cafes around the world.');       
    });
    if (/mobile/i.test(ua)) {
        // Сохраняем кнопки в переменную
        const buttons = $('.product-1-button, .product-2-button, .product-3-button');
    
        // При клике на любую кнопку
        buttons.click(function(e) {
            e.stopPropagation(); // предотвращает всплытие, чтобы не сработал общий обработчик
            buttons.css('background-color', '#f5f5f5'); // сбрасываем цвет у всех
            $(this).css('background-color', '#876145'); // меняем цвет только нажатой
        });
    
        // При клике в любое место на странице, кроме кнопок
        $(document).click(function() {
            buttons.css('background-color', '#f5f5f5');
        });
    }
});
//HEADER SHOW
$(document).ready(function() {
  let shown = false;

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 20) {
      if (!shown) {
        $('.header').show();
        shown = true;
      }
    } else {
      if (shown) {
        $('.header').hide();
        shown = false;
      }
    }
  });
});

// REVIEWS ANIMATION
$(document).ready(function() {
    const texts = [
        "I recently used your website to place an order, and I was really impressed! The layout is clean and easy to use, and I found everything I needed in just a few seconds. Ordering my favorite coffee was super quick, and the whole process felt smooth and convenient. I also loved how the site looks on my phone – very mobile-friendly. Great job, I’ll definitely be using it again!",
        "Absolutely love this coffee shop! The espresso is always rich and smooth, and the cozy atmosphere makes it the perfect place to relax. The baristas are super friendly, and their pour-over really brings out the flavor of the beans. I’ve made this my daily stop because of the great service and quality. I recently tried their seasonal latte and now I’m completely hooked — highly recommend!",
        "This place is a hidden gem for coffee lovers — every cup tastes like it was made with care. I appreciate the attention to detail, from the latte art to the bean selection. The interior is stylish and comfortable, making it ideal for both work and casual meetups. Their cold brew is one of the best I’ve had, perfectly balanced and refreshing. I always leave with a smile and look forward to coming back."
    ];
    let index = 0;
    const $textDiv = $('.reviews-section-text');
    const animationDuration = 500; // время анимации в мс

    function animateText(newIndex, direction) {
        const width = $textDiv.outerWidth();

        // Настраиваем направление ухода
        const outLeft = (direction === 'right') ? '100%' : '-100%';
        const inLeft = (direction === 'right') ? '-100%' : '100%';

        // Уходим с экрана
        $textDiv.animate({ left: outLeft }, animationDuration, function() {
            // Меняем текст и ставим за экран с другой стороны
            $textDiv.css({ left: inLeft }).text(texts[newIndex]);

            // Возвращаемся в центр
            $textDiv.animate({ left: '25%' }, animationDuration);
        });
    }
    function animateTextOpposite(newIndex, direction) {
        const width = $textDiv.outerWidth();

        // Настраиваем противоположное направление ухода
        const outLeft = (direction === 'left') ? '-100%' : '100%';
        const inLeft = (direction === 'left') ? '100%' : '-100%';

        // Уход с экрана
        $textDiv.animate({ left: outLeft }, animationDuration, function() {
            // Меняем текст, ставим за экран с другой стороны
            $textDiv.css({ left: inLeft }).text(texts[newIndex]);

            // Возвращаем в центр
            $textDiv.animate({ left: '25%' }, animationDuration);
        });
    }

    $('.arrow-right').click(function() {
        index = (index + 1) % texts.length;
        animateText(index, 'right');
    });

    $('.arrow-left').click(function() {
        index = (index - 1 + texts.length) % texts.length;
        animateTextOpposite(index, 'left');
    });
});


//
$(document).ready(function () {
  const $field = $('.subject-form-name');

  function checkEmpty() {
    if ($field.text().trim() === '') {
      $field.removeClass('not-empty');
    } else {
      $field.addClass('not-empty');
    }
  }

  $field.on('input blur focus', function () {
    checkEmpty();
  });

  // при загрузке страницы
  checkEmpty();
});

//
$(document).ready(function () {
  const $field = $('.email-form-name');

  function checkEmpty() {
    if ($field.text().trim() === '') {
      $field.removeClass('not-empty');
    } else {
      $field.addClass('not-empty');
    }
  }

  $field.on('input blur focus', function () {
    checkEmpty();
  });

  // при загрузке страницы
  checkEmpty();
});

//
$(document).ready(function () {
  const $field = $('.phone-form-name');

  function checkEmpty() {
    if ($field.text().trim() === '') {
      $field.removeClass('not-empty');
    } else {
      $field.addClass('not-empty');
    }
  }

  $field.on('input blur focus', function () {
    checkEmpty();
  });

  // при загрузке страницы
  checkEmpty();
});

//
$(document).ready(function () {
  const $field = $('.message-form-name');

  function checkEmpty() {
    if ($field.text().trim() === '') {
      $field.removeClass('not-empty');
    } else {
      $field.addClass('not-empty');
    }
  }

  $field.on('input blur focus', function () {
    checkEmpty();
  });

  // при загрузке страницы
  checkEmpty();
});


//
//SEND BUTTON FUNCTION
$(document).ready(function () {
    let Visible = false;
    const slideMenu = document.querySelector('.slide-menu');
    const drager = document.querySelector('.wrapper-drag');

    let isDragging = false;
    let startY = 0;
    let currentY = 0;
    let threshold = 200;
    let maxDrag = 400; // максимум, насколько можно потянуть вниз

    $('.send-button').click(function () {
        let AllFilled = true;

        $('.subject-form-name, .email-form-name, .phone-form-name, .message-form-name').each(function () {
            if($.trim($(this).text()) === '') {
                $(this).addClass('error')
                AllFilled = false;
            } else {
                $(this).removeClass('error')
            }
        });
        if(AllFilled) {
            location.reload();
        }
    });
    // menu 
    function Menu() {
        $('#menu-image').css({
            'position': 'fixed',
            'width': '30px',
            'height': '30px',
            'left': 'calc(100% - 70px)',
            'top':'20px',
            'z-index': '100',
        });
    }
    function OffMenu() {
        $('#menu-image').css({
            'display': 'none'
        });
    }

    if (/mobile/i.test(ua)) {
        Menu()
    } else {
        OffMenu()
    }
    $('.menu-1').click(function() {
        Visible = true;
        if (Visible) {
            $('.overlay').fadeIn(1);
            $('.slide-menu').animate({'bottom': '-2px'}, 10); 
        } else {
            $('.slide-menu').animate({'bottom': '-600px'}, 10);
            $('.overlay').fadeOut(1);
            Visible = false;
        }
        // Visible = !Visible
    });
    
    $('.overlay').click(function() {
        $('.slide-menu').animate({'bottom': '-600px'}, 10);
        $(this).fadeOut(1);
        Visible = false;
    });

    //

    // Слушаем касание по драгеру
    drager.addEventListener('touchstart', function (e) {
        if (e.touches.length !== 1 || e.target !== drager) return;
        isDragging = true;
        startY = e.touches[0].pageY;
    }, { passive: true });

    drager.addEventListener('touchmove', function (e) {
        if (!isDragging || e.target !== drager) return;

        currentY = e.touches[0].pageY;
        const diff = currentY - startY;

        if (diff > 0 && diff < maxDrag) {
            slideMenu.style.transition = 'none';
            slideMenu.style.bottom = `-${diff}px`;
        }
    }, { passive: true });

    drager.addEventListener('touchend', function (e) {
        if (!isDragging || e.target !== drager) return;

        const diff = currentY - startY;
        slideMenu.style.transition = 'bottom 0.2s ease';

        if (diff > threshold) {
            slideMenu.style.bottom = '-600px';
            $('.overlay').fadeOut(1);
        } else {
            slideMenu.style.bottom = '-2px';
        }

        isDragging = false;
    });

});
$(document).ready(function () {

    //  LINK MENU FUNCTION 
    if (/mobile/i.test(ua)) {
        $(".home-menu").click(function() {
            $('.overlay').fadeOut(4);
            $('.slide-menu').animate({'bottom':'-600px'}, 5);
            $('html, body').animate({
                scrollTop: $(".main-text").offset().top
            }, 1000);
        });
        $('.products-menu').click(function () {
            $('.overlay').fadeOut(4);
            $('.slide-menu').animate({'bottom':'-600px'}, 5);
            $('html, body').animate({
                scrollTop: $(".section-wrapper").offset().top
            }, 1000);
        })
        $('.categories-menu').click(function () {
            $('.overlay').fadeOut(4);
            $('.slide-menu').animate({'bottom':'-600px'}, 5);
            $('html, body').animate({
                scrollTop: $(".categories-section").offset().top
            }, 2000);
        })
        $('.why-us-menu').click(function () {
            $('.overlay').fadeOut(4);
            $('.slide-menu').animate({'bottom':'-600px'}, 5);
            $('html, body').animate({
                scrollTop: $(".why-us-section").offset().top
            }, 2000);
        })
        $('.reviews-menu').click(function () {
            $('.overlay').fadeOut(4);
            $('.slide-menu').animate({'bottom':'-600px'}, 5);
            $('html, body').animate({
                scrollTop: $(".reviews-section-name-wrapper").offset().top
            }, 2000);
        })
        $('.contact-menu').click(function () {
            $('.overlay').fadeOut(4);
            $('.slide-menu').animate({'bottom':'-600px'}, 5);
            $('html, body').animate({
                scrollTop: $(".label-2-text").offset().top
            }, 2000);
        })
    }
});
