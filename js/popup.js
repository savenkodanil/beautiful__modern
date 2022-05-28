
/******************************
**********МОДАЛЬНОЕ ОКНО*******
******************************/
$(document).ready(function() {
    $('.read__more').click(function(event) {
        $('body , .overlay , .modal__window').toggleClass('active');
    });
  });
  
  $(document).ready(function() {
    $('.close__modal__window , .close__popup').click(function(event) {
        $(' body , .overlay , .bg__team , .modal__window , .close__modal__window').removeClass('active');
    });
  });
  
  $(document).ready(function() {
    $('.overlay').click(function(event) {
        $(' body , .overlay  , .modal__window , .close__modal__window').removeClass('active');
    });
  });

  (function($){
   $(window).on("load",function(){
       $(".about__more").mCustomScrollbar({
          theme:"dark-3"
       });
   });
})(jQuery);