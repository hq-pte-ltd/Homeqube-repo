$(document).ready(function(){
    $('.carousel-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        fade: true,
        asNavFor: '.carousel-indicators'
      });
      $('.carousel-indicators').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.carousel-inner',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        draggable: true,
        
      });
  });