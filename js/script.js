$(function(){

  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots'
  });

  $('.header__btn-menu').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('header__btn-menu_active');
  });

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});