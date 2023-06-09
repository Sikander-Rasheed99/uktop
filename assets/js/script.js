
$('.client-slider').slick({
    speed: '1000',
  //   autoplay: true,
    slidesToShow: 1,
     slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }]
  
  });