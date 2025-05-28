$(document).ready(function () {
    $(".custom-carousel1").owlCarousel({
      loop: true,
      // margin-top: 10,
      // margin: 10 0 0 0,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      dots: false,  // 👈 this disables the dots
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 2}
      }
    });
  });
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      dots: false,  // 👈 this disables the dots
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 }
      }
    });
  });

  $(".faq-question").on("click", function () {
    var answer = $(this).next(".faq-answer");

    // Slide up all other answers
    $(".faq-answer").not(answer).slideUp();
    $(".faq-toggle").not($(this).find(".faq-toggle")).text("+");

    // Toggle current one
    answer.slideToggle();
    var toggle = $(this).find(".faq-toggle");
    toggle.text(toggle.text() === "+" ? "−" : "+");
  });


  
  // $(document).ready(function () {
  //   $(".custom-carousel1").owlCarousel({
  //     rtl: true,
  //     loop: true,
  //     margin: 20,
  //     autoplay: true,
  //     autoplayTimeout: 3000,
  //     autoplayHoverPause: false,
  //     items: 3,
  //     smartSpeed: 1000,
  //     animateOut: 'fadeOut'
  //   });
  // });



  
  