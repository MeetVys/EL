console.log("hi");

$(window).on('load', function() {
    $(window).scrollTop(0);
    $("#load-cont").delay(200).fadeOut();
});

function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }
  
aos_init();
