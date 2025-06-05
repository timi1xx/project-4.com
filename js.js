const ua = navigator.userAgent;

$(document).ready(function () {
  if (/mobile/i.test(ua)) {
    console.log("Пользователь зашел с телефона 📱");
  } else if (/tablet/i.test(ua)) {
    console.log("Пользователь зашел с планшета 📲");
  } else {
    console.log("Пользователь зашел с компьютера 🖥️");
  }
  $(function () {
    let current = 0;
    const slides = $(".img-slide");
    const total = slides.length;

    function showSlide(index) {
      slides.removeClass("active").eq(index).addClass("active");
    }

    $(".button-1").on("click", function () {
      current = (current + 1) % total;
      showSlide(current);
    });

    $(".button-2").on("click", function () {
      current = (current - 1 + total) % total;
      showSlide(current);
    });
  });
});

// MENU
$(document).ready(function () {

  function OnMenu() {
    $('.menu-icon').css({
        'position': 'relative',
        'margin-left': '300px',
        'width': '70px',
        'height': '70px',
        'margin-top': '2px',
    });
  }
  function OffMenu() {
    $('.menu-icon').css({
      'display':'none',
    });
  }
  if (/mobile/i.test(ua)) {
    OnMenu();
  } else {
    OffMenu();
  }

  //MENU ANIMATION
  $('.menu-icon').click(function() {
    $('.menu').animate({'top':'0%'}, 500);
  });
  $('.close-icon').click(function() {
    $('.menu').animate({'top':'-70%'}, 500);
  });
  $('.link-menu-1').click(function() {
    $('.menu').animate({'top':'-70%'},500);
    $('html, body').animate({
      scrollTop: $('.web-name').offset().top
    }, 500);
  });
  $('.link-menu-2').click(function() {
    $('.menu').animate({'top':'-70%'},500);
    $('html, body').animate({
      scrollTop: $('.choose-4').offset().top
    }, 500);
  });
  $('.link-menu-3').click(function() {
    $('.menu').animate({'top':'-70%'}, 500);
    $('html, body').animate({
      scrollTop: $('.box-1').offset().top
    }, 500);
  });
  //

  $('.services').click(function() {
    $('html, body').animate({
      scrollTop: $('.box-1').offset().top
    }, 500);
  });
  $('.why-us').click(function() {
    $('html, body').animate({
      scrollTop: $('.text').offset().top
    }, 500);
  });
  $('.contacts').click(function() {
    $('html, body').animate({
      scrollTop: $('.contact').offset().top
    }, 500);
  });
});