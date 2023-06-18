
$('.client-slider').slick({
  autoPlay: true,
  speed: '1000',
  slidesToShow: 1,
  slidesToScroll: 1,
  //  centerMode: true
  arrows: false,
  dots: false,
});

$('.brands-slider').slick({
  autoPlay: true,
  speed: '1000',
  slidesToShow: 4,
  slidesToScroll: 1,
  //  centerMode: true
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
  ]
});

$(document).ready(function () {
  $(".expert-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    autoplay: false
  });
  $(".prev-btn").click(function () {
    $(".expert-slider").slick("slickPrev");
  });

  $(".next-btn").click(function () {
    $(".expert-slider").slick("slickNext");
  });
  $(".prev-btn").addClass("slick-disabled");
  $(".expert-slider").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".prev-btn").addClass("slick-disabled");
    } else {
      $(".prev-btn").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
      $(".next-btn").addClass("slick-disabled");
    } else {
      $(".next-btn").removeClass("slick-disabled");
    }
  });
});



// input tel start


var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
  // separateDialCode:true,
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.0/build/js/utils.js",
});

// store the instance variable so we can access it in the console e.g. window.iti.getNumber()
window.iti = iti;

// input tel end 