$(document).ready(function() {
  $(window).on('wheel', function(event){
    var ventana = $(window).scrollTop();
    var menu1 = $('#altra01obj').offset().top -200;
    var menu2 = $('#altra02obj').offset().top -200;
    var menu3 = $('#altra03obj').offset().top -200;
    var menu4 = $('#altra04obj').offset().top -200;
    var menu5 = $('#altra05obj').offset().top -200;
    if (ventana >= menu5) {
       $('#menufranjaclick05').addClass('activo');
       $('#menufranjaclick01, #menufranjaclick02, #menufranjaclick03, #menufranjaclick04').removeClass('activo');
     } else if (ventana >= menu4) {
       $('#menufranjaclick04').addClass('activo');
       $('#menufranjaclick01, #menufranjaclick02, #menufranjaclick03, #menufranjaclick05').removeClass('activo');
     } else if (ventana >= menu3) {
       $('#menufranjaclick03').addClass('activo');
       $('#menufranjaclick01, #menufranjaclick02, #menufranjaclick04, #menufranjaclick05').removeClass('activo');
     } else if (ventana >= menu2) {
       $('#menufranjaclick02').addClass('activo');
       $('#menufranjaclick01, #menufranjaclick03, #menufranjaclick04, #menufranjaclick05').removeClass('activo');
     } else if (ventana >= menu1){
     $('#menufranjaclick01').addClass('activo');
     $('#menufranjaclick02, #menufranjaclick03, #menufranjaclick04, #menufranjaclick05').removeClass('activo');
     } else if (ventana < menu1){
       $('#menufranjaclick01').removeClass('activo');
     }
  });





  $('.textoderecha').css('display', 'none');
  //añadidos a quitar si no se usan
      $(window).on('wheel', function(event){
        var ventana = $(window).scrollTop();
        var frame1 = ($('#foto01').scrollTop()) + 1120;
        var frame2 = ($('#foto02').scrollTop()) + 4800;
        var frame3 = ($('#menu3').scrollTop()) + 20;
        var frame4 = ($('#menu4').scrollTop()) + 420;
        var framearticulo = ($('article').scrollTop()) + 420;
        if (frame1 > ventana){
          $('#foto01').css('display', 'none');
        };
        if (frame1 < ventana){
          $('#foto01').fadeIn(2000);
        };

        if (frame2 < ventana){
          $('#foto02').fadeIn(2000);
        };

        if (ventana > frame3){
          $('#menu3').slideDown('slow');
        };
        if (ventana > frame4){
          $('#menu4').slideDown('slow');
        }
      });
});
