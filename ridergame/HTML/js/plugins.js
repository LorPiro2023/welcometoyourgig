$( document ).ready(function() { 
    $("#slider .tabs").tabs(".items > .item", {
        effect: 'fade',
        fadeOutSpeed: "700",
        rotate: true,
    }).slideshow({
        clickable: false,
        autoplay: false,
    });
    audio_1();
    $('#reload').css({display: 'none'});
});
$('#p1_button').click(function () {
    $('.p2').fadeIn(1000);
    $('.p1').fadeOut(1000);
});
$("#volume, .p1_logo, #p1_button").click(function(){audio_in.play();});
function audio_1(){
    audio_in = new Audio('audio/arcade/intro_yoshi.ogg'); 
    audio_in.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    //audio_in.volume = 0.1;
}
function audio_2(){
    arcade_1 = new Audio('audio/arcade/arcade_1.ogg'); 
    arcade_1.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    arcade_1.play();
    //arcade_1.volume = 0.1;
}
function arcadeFc_2(){
    arcade_2 = new Audio('audio/arcade/arcade_2.ogg'); 
    arcade_2.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    arcade_2.play();
    //arcade_2.volume = 0.1;
}
function arcadeFc_3(){
    arcade_3 = new Audio('audio/arcade/arcade_3.ogg'); 
    arcade_3.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    arcade_3.play();
    //arcade_3.volume = 0.1;
}
function arcadeFc_4(){
    arcade_4 = new Audio('audio/arcade/arcade_4.ogg'); 
    arcade_4.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    arcade_4.play();
    //arcade_4.volume = 0.1;
}
function arcadeFc_5(){
    arcade_5 = new Audio('audio/arcade/arcade_5.ogg'); 
    arcade_5.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    arcade_5.play();
    //arcade_5.volume = 0.1;
}
function arcadeFc_6(){
    arcade_6 = new Audio('audio/arcade/arcade_6.ogg'); 
    arcade_6.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    arcade_6.play();
    //arcade_6.volume = 0.1;
}

//LOADPROFILES

$('#app01').click(function () {
    $('.main').css('background-image', 'unset');
    $('.background').addClass('main_bg01');
    $('.p3').fadeIn(1000);
    $('.p2').fadeOut(1000);
    profile01_js();
    $('#popup .modal-content .avatar.a2').remove();
    $('#popup .modal-content .avatar.a3').remove();
    $('#popup .modal-content .avatar.a4').remove();
    audio_in.pause();audio_2();$('#reload').fadeIn(1000);
});
$('#app02').click(function () {
    $('.main').css('background-image', 'unset');
    $('.background').addClass('main_bg01');
    $('.p3').fadeIn(1000);
    $('.p2').fadeOut(1000);
    profile02_js();
    $('#popup .modal-content .avatar.a1').remove();
    $('#popup .modal-content .avatar.a3').remove();
    $('#popup .modal-content .avatar.a4').remove();
    audio_in.pause();audio_2();$('#reload').fadeIn(1000);
});
$('#app03').click(function () {
    $('.main').css('background-image', 'unset');
    $('.background').addClass('main_bg01');
    $('.p3').fadeIn(1000);
    $('.p2').fadeOut(1000);
    profile03_js();
    $('#popup .modal-content .avatar.a1').remove();
    $('#popup .modal-content .avatar.a2').remove();
    $('#popup .modal-content .avatar.a4').remove();
    audio_in.pause();audio_2();$('#reload').fadeIn(1000);
});
$('#app04').click(function () {
    $('.main').css('background-image', 'unset');
    $('.background').addClass('main_bg01');
    $('.p3').fadeIn(1000);
    $('.p2').fadeOut(1000);
    profile04_js();
    $('#popup .modal-content .avatar.a1').remove();
    $('#popup .modal-content .avatar.a2').remove();
    $('#popup .modal-content .avatar.a3').remove();
    audio_in.pause();audio_2();$('#reload').fadeIn(1000);
});

//RANDOM FUNCTION PICKS
function randomST1(){
   var value_A_Plus3 = Math.floor(Math.random() * 2);
   if( value_A_Plus3 =="0") {
      $('.newApp_p2 p.target').html("Esaurisci i GB di connessione internet del tuo pacchetto, ti disconnetti!<br><strong>4 euro sono stati detratti per acquistare GB aggiuntivi</strong>");
      var AA = +(document.getElementById("money").innerText);
      var B = 4;
      var CA = +AA - +B; 
      var timeOut_A1 = setTimeout(function(){
            $('#money').addClass('RED_TIMEanimate');
            $('#money').each(function () {
                $(this).prop('Counter', AA ).animate({
                    Counter: CA
                }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
            });
            var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_A1);
        }, 1000);
    }
    else if ( value_A_Plus3 =="1") {
      $('.newApp_p2 p.target').html("Una macchina non ti nota a un incrocio e cadi! Non conosci i dettagli della tua assicurazione sul lavoro");
      var AA = +(document.getElementById("money").innerText);
      var B = 30;
      var CA = +AA - +B; 
      var timeOut_A1 = setTimeout(function(){
            $('#money').addClass('RED_TIMEanimate');
            $('#money').each(function () {
                $(this).prop('Counter', AA ).animate({
                    Counter: CA
                }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
            });
            var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_A1);
        }, 1000);
    }
}
function randomST2(){
   var value_C_Plus3 = Math.floor(Math.random() * 3);
   if( value_C_Plus3 =="0") {
      $('.after_motion_p7').html("Oh che sfortuna! Mentre stai consegnando alcune pizze ti rubano la bicicletta. Ne compri una nuova (70 €)");
      var AA = +(document.getElementById("money").innerText);
      var B = 70;
      var CA = +AA - +B; 
      var timeOut_A1 = setTimeout(function(){
            $('#money').addClass('RED_TIMEanimate');
            $('#money').each(function () {
                $(this).prop('Counter', AA ).animate({
                    Counter: CA
                }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
            });
            var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_A1);
        }, 1000);
    }
   else if ( value_C_Plus3 =="1") {
      $('.after_motion_p7').html("Pavé e binari del tram sono nemici della tua bicicletta. C'è bisogno di manutenzione! Un check-up completo ti costa 22 euro");
      var AB = +(document.getElementById("money").innerText);
      var B = 22;
      var CB = +AB - +B;
      var timeOut_A1 = setTimeout(function(){
            $('#money').addClass('RED_TIMEanimate');
            $('#money').each(function () {
                $(this).prop('Counter', AB ).animate({
                    Counter: CB
                }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
            });
            var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_A1);
        }, 1000);
    }
   else if ( value_C_Plus3 =="2") {
      $('.after_motion_p7').html("Oh che sfortuna! Mentre stai consegnando alcune pizze ti si buca la ruota posteriore! Sostituisci la camera d’aria (4 €)");
      var AD = +(document.getElementById("money").innerText);
      var B = 4;
      var CD = +AD - +B;
      var timeOut_A1 = setTimeout(function(){
            $('#money').addClass('RED_TIMEanimate');
            $('#money').each(function () {
                $(this).prop('Counter', AD ).animate({
                    Counter: CD
                }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
            });
            var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_A1);
        }, 1000);
    }
}
function randomST3(){
   resetAnimation();
   $('#popup .modal-content').addClass('imprevisto-green');
    
   var value_B_Plus3 = Math.floor(Math.random() * 3);
   if( value_B_Plus3 =="0") {
      $('#results').css({display: 'none'});
      $(".modal").css({display: 'block'});
      $('#popup .modal-content p').text("Di fronte a un ristorante di sushi sei costretto ad aspettare 45 minuti una consegna. Perdi molto tempo nell’attesa e alcune potenziali consegne.");
        var A0 = +(document.getElementById("money").innerText);
        var B0 = 4;
        var C0 = +A0 + +B0;
        var timeOut_A2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_A2);
        }, 1500);

        var A1 = +(document.getElementById("hour").innerText);
        var B1 = 1;
        var C1 = +A1 + +B1;
        var timeOut_B2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_B2);
        }, 1500);
    }
    else if ( value_B_Plus3 =="1") {
      $('#results').css({display: 'none'});
      $(".modal").css({display: 'block'});
      $('#popup .modal-content p').text("Una consegna sfortunata: quattro hamburger dall'altra parte della cittá!");
        var A0 = +(document.getElementById("money").innerText);
        var B0 = 4;
        var C0 = +A0 + +B0;
        var timeOut_A2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_A2);
        }, 1500);

        var A1 = +(document.getElementById("hour").innerText);
        var B1 = 2;
        var C1 = +A1 + +B1;
        var timeOut_B2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_B2);
        }, 1500);  
    }
    else if ( value_B_Plus3 =="2") {
      $('#results').css({display: 'none'});
      $(".modal").css({display: 'block'});
      $('#popup .modal-content p').text("Pochi minuti prima di terminare l’ultima ora di lavoro ti viene assegnata una consegna dall’altra parte della città. Non ti vengono pagati i chilometri e torni a casa sfinito, molto più tardi del previsto");
        var A0 = +(document.getElementById("money").innerText);
        var B0 = 4;
        var C0 = +A0 + +B0;
        var timeOut_A2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_A2);
        }, 1500);

        var A1 = +(document.getElementById("hour").innerText);
        var B1 = 1;
        var C1 = +A1 + +B1;
        var timeOut_B2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_B2);
        }, 1500);
    }
}
function randomST4(){
    resetAnimation();
    var value_D_Plus3 = Math.floor(Math.random() * 3);
   if( value_D_Plus3 =="0") {
       $('#popup .modal-content').addClass('imprevisto');
      $('#results').css({display: 'none'});
      $(".modal").css({display: 'block'});
      $('#popup .modal-content p').html("Ti ammali e devi riposare un paio di giorni. Perdi molte ore prenotate, il tuo punteggio reputazionale si abbassa e guadagni molto meno.");
        var A0 = +(document.getElementById("money").innerText);
        var B0 = 79;
        var C0 = +A0 - +B0;
        var timeOut_D2 = setTimeout(function(){
        $('#money').addClass('RED_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_D2);
        }, 1500);

        var A1 = +(document.getElementById("hour").innerText);
        var B1 = 10;
        var C1 = +A1 - +B1;
        var timeOut_E2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_E2);
        }, 1500);
    }
    else if ( value_D_Plus3 =="1") {
        $('#popup .modal-content').addClass('imprevisto-green');
      $('#hourB').text('3 ore');$('#moneyB').text('22 euro');
      $(".modal").css({display: 'block'});
      $('#popup .modal-content p').html("Che fortuna! Un 'collega' ti informa che 'libererá' tre ore prenotate nel fine settimana");
        var A0 = +(document.getElementById("money").innerText);
        var B0 = 22;
        var C0 = +A0 + +B0;
        var timeOut_D2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_D2);
        }, 1500);

        var A1 = +(document.getElementById("hour").innerText);
        var B1 = 3;
        var C1 = +A1 + +B1;
        var timeOut_E2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_E2);
        }, 1500);  
    }
    else if ( value_D_Plus3 =="2") {
        $('#popup .modal-content').addClass('imprevisto-green');
      $('#hourB').text('5 ore');$('#moneyB').text('22 euro');
      $(".modal").css({display: 'block'});
      $('#popup .modal-content p').html("Sembra proprio che questa settimana nessuno ordini cibo a casa. Passano ore senza consegne!");
        var A0 = +(document.getElementById("money").innerText);
        var B0 = 22;
        var C0 = +A0 + +B0;
        var timeOut_D2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_D2);
        }, 1500);

        var A1 = +(document.getElementById("hour").innerText);
        var B1 = 5;
        var C1 = +A1 + +B1;
        var timeOut_E2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_E2);
        }, 1500); 
    }
}
function randomST5(){
    resetAnimation();
    $('#popup .modal-content').addClass('imprevisto-green');
    var value_D_Plus3 = Math.floor(Math.random() * 2);
   if( value_D_Plus3 =="0") {
      $('#hourB').text('2 ore');$('#moneyB').text('26 euro');
      $(".modal").css({display: 'block'});
      $('#popup .modal-content p').html("Inizia a piovere. Ti connetti per guadagnare il 20% in più su ogni consegna!");
        var A0 = +(document.getElementById("money").innerText);
        var B0 = 26;
        var C0 = +A0 + +B0;
        var timeOut_D2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_D2);
        }, 1500);

        var A1 = +(document.getElementById("hour").innerText);
        var B1 = 2;
        var C1 = +A1 + +B1;
        var timeOut_E2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_E2);
        }, 1500);
    }
    else if ( value_D_Plus3 =="1") {
      $('#hourB').text('2 ore');$('#moneyB').text('4 euro');
      $(".modal").css({display: 'block'});
      $('#popup .modal-content p').html("Una consegna sfortunata: quattro hamburger dall'altra parte della cittá!");
        var A0 = +(document.getElementById("money").innerText);
        var B0 = 4;
        var C0 = +A0 + +B0;
        var timeOut_D2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_D2);
        }, 1500);

        var A1 = +(document.getElementById("hour").innerText);
        var B1 = 2;
        var C1 = +A1 + +B1;
        var timeOut_E2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_E2);
        }, 1500);  
    }
}
function WTF(){
    var AA = +(document.getElementById("money").innerText);
    var B = 15;
    var CA = +AA - +B; 
    var timeOut_A1 = setTimeout(function(){
        $('#money').addClass('RED_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', AA ).animate({
                Counter: CA
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_A1);
    }, 1000);
}

function removeRDback(){
    $('.background').removeClass('random_bg01 random_bg02 random_bg03 random_bg04 random_bg05 random_bg06');
}
function randomBG(){
    removeRDback();
    var backgroundIMG = Math.floor(Math.random() * 5);
    if( backgroundIMG =="0") {$('.background').addClass('random_bg01');}
    else if( backgroundIMG =="1") {$('.background').addClass('random_bg02');}
    else if( backgroundIMG =="2") {$('.background').addClass('random_bg03');}
    else if( backgroundIMG =="3") {$('.background').addClass('random_bg04');}
    else if( backgroundIMG =="4") {$('.background').addClass('random_bg05');}
    else if( backgroundIMG =="5") {$('.background').addClass('random_bg06');}
}
var notify2 = document.getElementById('#notify-content');
$('.close_two').onclick = function() {
    notify2.style.display = "none";
    resetAnimation();$('.notify-content .icon').removeClass('mailANIM');    
}
window.onclick = function(event) {
    if (event.target == notify) {
        notify.style.display = "none";
        resetAnimation();
    }
}
$('.dialogue').click(function(){$(this).css({display: 'none'});});
var notify = document.getElementById('mynotify');
var spantwo = document.getElementsByClassName("close_two")[0];
spantwo.onclick = function() {
notify.style.display = "none";$('.notify-content .icon').removeClass('mailANIM');
}
function resetAnimation(){
    $('#results').css({display: 'block'});
    $('#hour').removeClass('TIMEanimate');
    $('#money').removeClass('GREEN_TIMEanimate RED_TIMEanimate');
    $('.notify-content .icon').removeClass('mailANIM');
}
function transitionM(){
    $('#mask').css('width', '100%');
    $('#mask').css('display', 'block');
    $('#mask').animate({width: '0%'}, 2000);
    $('#mask').delay(2000).fadeOut(1);
}