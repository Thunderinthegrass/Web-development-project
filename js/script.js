$(document).ready(function() {

  $('.works__btn[filter]').click(function () {
    if ($(this).attr('val') == 'off') {
       $('.works__btn[filter]').attr('val', 'off').removeClass('focused');
       $(this).attr('val', 'on').addClass('focused');
       $('.filter > div').hide(300);
       $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
       if ($(this).attr('filter') == 'all') {
          $('.works__btn[filter]').attr('val', 'off').removeClass('focused');
          $(this).attr('val', 'on').addClass('focused');
          $('.filter > div').show(300);
       }
    }
 });
  
  $('.team__members').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }, {
      breakpoint: 815,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
    }]
  });



  $('.header__btn-menu').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('header__btn-menu_active');
  });

  $('.header__btn-menu').on('click', function () {
    $('.menu ul').slideToggle();
  });

});