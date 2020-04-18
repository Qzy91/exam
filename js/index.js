	$(document).ready(function(){
  $('.header__carusel').slick({
  	arrows: true,
  	});
});


	$(document).ready(function(){
  $('.post__carusel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        // variableWidth: false,
        // infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: "unslick"
    }
  ]

  	});
});