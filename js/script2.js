// JavaScript Document

  
$(window).on('load', function() {
    $(window).scrollTop(0);
    $("#load-cont").delay(200).fadeOut();
});


 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
