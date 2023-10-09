$(document).ready(function() {
//cargar contenido
  // $('#elcarto, .flourish-embed, video').ready(function () {
  //     $('.loading').css('display', 'none');
  // });
  // $('#elcarto, .flourish-embed, video').load(function () {
  //     $('.loading').css('display', 'none');
  // });

 // flecha arriba
 var pantalla = window.innerWidth;



    $(".contenedorflecha").click(function(event) {
        event.preventDefault();
          $('html, body').animate({
              scrollTop: ($("article").offset().top)
          }, 1200);
          $(".contenedorflecha").prop('disabled', true);
          setTimeout(function() {
            $(".contenedorflecha").prop('disabled', false);
          }, 1200);
    });

    // flecha abajo
       $(".subir").click(function(event) {
         event.preventDefault();
         var ventana = $(window).scrollTop();
          if (ventana > 100){
             $('html, body').animate({
                 scrollTop: 0
             }, 1200);
             $(".subir").css('cursor', 'not-allowed');
             setTimeout(function() {
               $(".subir").prop('disabled', false);
               $(".subir").css('cursor', 'pointer');
             }, 1200);
           }
       });


       //menu franja
       $(".desplegableint").click(function() {

         if ($(".desplegableint").hasClass('activar')){
          $(".ocultarnav").slideDown();
           $(".desplegableint").removeClass("activar");
           $(".negro").css('display', 'block');
         } else {
          $(".ocultarnav").slideUp();
          $(".desplegableint").addClass("activar");
          $(".negro").css('display', 'none');
          }
       });
       $(".negro").click(function() {
         $(".ocultarnav").slideUp();
         $(".desplegableint").addClass("activar");
         $(".negro").css('display', 'none');
       });

       $(window).resize(function() {
         if ((window.innerWidth) > 640){
           $(".ocultarnav").css('display', 'block');
           $(".desplegableint").addClass("activar");
           $(".negro").css('display', 'none');
         } else if ((window.innerWidth) <= 640){
           $(".ocultarnav").css('display', 'none');
           $(".desplegableint").addClass("activar");
           $(".negro").css('display', 'none');
         }
       });



     //textotooltip

        var tiempo;
       $('.tooltip').on('mouseover', function () {
         clearTimeout(tiempo);
         var pantalla = window.innerWidth;
         var esto = $(this);
         esto.stop(true, true);
         esto.next().stop(true, true);

         $('.tooltip').css('z-index', '9999999');
         esto.css('z-index', '999999999');
         esto.next().css({'width': '0px'});
         tiempo = setTimeout(function () {
           $('.negrotooltip').css('display', 'block');
             var posicion = $(esto).position();
             var ancho = $(esto).width();

             if ( pantalla > 640){
               $(esto).next().css('display', 'block');
               $(esto).next().animate({
                   opacity: 1,
                   width: '380px'}, 200);
               $(esto).next().css('left', posicion.left + ancho/2);
               $(esto).next().css('top', posicion.top);
             } else if (pantalla <= 640){
               $(esto).next().css('display', 'block');
               $(esto).next().css({'left': '1%', 'top': posicion.top - 8});
               $(esto).next().animate({
                   opacity: 1,
                   width: '98%'}, 200);
             }

           }, 200);

       }).mouseout(function () {
         clearTimeout(tiempo);
         var esto = $(this);
         esto.stop(true, true);
         esto.next().stop(true, true);
         $('.negrotooltip').css('display', 'none');
           //Enable mouseover again?
           $(this).next().animate({
               opacity: 0,
               width: '0%'}, 200);
        setTimeout(function () {
          $(esto).next().css('display', 'none');
          }, 200);
       });

       //desplegable
         $(".desplegableboton").click(function() {

            if ($(this).next().hasClass("activar")){
            $(this).next().slideUp();
            $(this).next().removeClass("activar");
            $(this).find('img').attr('src','images/bajar.png');

            } else {
            var texto = $(this).first().text();
            $(this).next().slideDown();
            $(this).next().addClass("activar");
            $(this).find('img').attr('src','images/subir.png');

          }
        });






});
