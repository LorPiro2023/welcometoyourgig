$(document).ready(function() {
  $(window).on('wheel', function(event){
    var ventana = $(window).scrollTop();
    var menu1 = $('#altra01obj').offset().top -200;
    var menu2 = $('#altra02obj').offset().top -200;
    if (ventana >= menu2) {
       $('#menufranjaclick02').addClass('activo');
       $('#menufranjaclick01').removeClass('activo');
     } else if (ventana >= menu1) {
       $('#menufranjaclick01').addClass('activo');
       $('#menufranjaclick02').removeClass('activo');
     } else if (ventana < menu1){
       $('#menufranjaclick01').removeClass('activo');
     }
  });

});
