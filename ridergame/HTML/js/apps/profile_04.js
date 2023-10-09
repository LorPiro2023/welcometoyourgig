function profile04_js(){
document.getElementById('video_p3').addEventListener('ended',myHandler,false);
function myHandler(e) {
    $('#video_p3').fadeOut();
    $('p.after_motion_p3').fadeIn(1000);
    $('#continue_01').fadeIn(1000);
    arcade_1.pause();arcadeFc_2();
    $('#skip').fadeOut(1);
}
$('#clearOptions_3, #clearOptions_2, #clearOptions_1').click(function(){
    $('#continue_03').prop('disabled', false);
}); 
$('#skip').click(function(){
    myHandler();
    $(this).attr('disabled', true).fadeOut(700);
    document.getElementById("video_p3").removeEventListener("ended", myHandler);

    var videoR = document.getElementById('video_p3');
    videoR.pause();
});
//EMAIL
$('#pre_start').click(function (){
  $('#mynotify p').text("Un'app ha accettato la tua candidatura! Ti convocano per un colloquio dove ti verranno fornite tutte le informazioni sul lavoro");  
  $('#mynotify').css({display: 'block'});
    var popNotific = $("#notification")[0];
    popNotific.play();
    setTimeout(function(){
        $('#pre_start').fadeOut(500);
        $('.s3_0').fadeOut(1000);
        $('#start').delay(1000).fadeIn(1500);
        $('.notify-content .icon').addClass('mailANIM');
    }, 1000);
});    
$('#start').click(function () {
    $('.wrapper.motion_p3').fadeIn(1000);
    $('#video_p3').get(0).play();
    $('.background').addClass('main_bg02');
    $('#start').fadeOut(1000);
});
$('#continue_01').click(function () {
    $('#continue_01, p.after_motion_p3').fadeOut(1);
    $('p.after_motion_p4, #working').fadeIn(1000);
    $('#continue_02A').delay(500).fadeIn(1000);
    $('#continue_02B').delay(600).fadeIn(1000);
    $('#continue_02C').delay(700).fadeIn(1000);
    $('.background').removeClass('main_bg02');
    $('.background').addClass('main_bg03');
    WTF();
}); 
$('#continue_02A').click(function () {
    $('#continue_02A,#continue_02B,#continue_02C, p.after_motion_p4').fadeOut(1);
    $('#continue_03, p.after_motion_p5').fadeIn(1000);
    $('.background').removeClass('main_bg03');
    randomBG();
    
    // MODAL TXT
    $('#hourB').text('5 ore');$('#moneyB').text('33 uero');
    $('#form_01').delay(500).fadeIn(1000);
    
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 33;
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
    var B1 = 5;
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
    newTxt_sector_P6();
});
$('#continue_02B').click(function () {
    $('#continue_02A,#continue_02B,#continue_02C, p.after_motion_p4').fadeOut(1);
    $('#continue_03, p.after_motion_p5').fadeIn(1000);
    $('.background').removeClass('main_bg03');
    randomBG();
    
    // MODAL TXT
    $('#hourB').text('5 ore');$('#moneyB').text('37 euro');
    $('#form_01').delay(500).fadeIn(1000);
    
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 37;
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
    var B1 = 5;
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
    newTxt_sector_P6();
});
$('#continue_02C').click(function () {
    $('#continue_02A,#continue_02B,#continue_02C, p.after_motion_p4').fadeOut(1);
    $('#continue_03, p.after_motion_p5').fadeIn(1000);
    $('.background').removeClass('main_bg03');
    randomBG();
    
    // MODAL TXT
    $('#hourB').text('10 ore');$('#moneyB').text('70 euro');
    $('#form_01').delay(500).fadeIn(1000);
    
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 70;
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
    var B1 = 10;
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
    newTxt_sector_P6();
});    
$('#continue_03').click(function () {
    $('#working').fadeIn(100);
    transitionM();
    arcade_2.pause();arcadeFc_3();
    var REVISED_NUM = +(document.getElementById("money").innerText);
    
    if ( $("#clearOptions_3").is(':checked') || $("#clearOptions_2").is(':checked') || $("#clearOptions_1").is(':checked') ){
        $('#continue_03, p.after_motion_p5, #form_01').fadeOut(1);
        var selVal_A = $('input[name=option1]:checked').val();
        var selVal_B = $('input[name=option2]:checked').val();
        var selVal_C = $('input[name=option3]:checked').val();
        randomBG();
        
        $('.after_motion_p6, .p3_buttons.setbtn1').fadeIn(1000);
    
        if( $("#clearOptions_3").is(':checked') && !$("#clearOptions_2").is(':checked') ) {
                var A0 = +(document.getElementById("money").innerText);
                var B0 = 6;
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
        } 
        else if ( $("#clearOptions_2").is(':checked')  && !$("#clearOptions_3").is(':checked') ) {
                var A0 = +(document.getElementById("money").innerText);
                var B0 = 20;
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
        } 
        else if ( $("#clearOptions_2").is(':checked') && $("#clearOptions_3").is(':checked') ) {
                var A0 = +(document.getElementById("money").innerText);
                var B0 = 26;
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
        }
    }
    var timeOut_02 = setTimeout(function(){resetAnimation();clearTimeout(timeOut_02);},1100);
});
$('#continue_05').click(function () {
    $('#working').fadeIn(100);
    randomBG();
    // MONEY SET HERE
    var AA = +(document.getElementById("money").innerText);
    var B = 176;
    var CA = +AA + +B; 
    var timeOut_C1 = setTimeout(function(){
            $('#money').addClass('GREEN_TIMEanimate');
            $('#money').each(function () {
                $(this).prop('Counter', AA ).animate({
                    Counter: CA
                }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
            });
            var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C1);
        }, 1000);
    resetAnimation();
    $("#moneyB").text('176 euro');
    $("#hourB").text('25 ore');
      // TIME SET HERE
    var A1 = +(document.getElementById("hour").innerText);
    var B1 = 25;
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
    
    
    $('#continue_05, #continue_06, p.after_motion_p8').fadeOut(1);
    $('p.after_motion_p9.target').text('Il tuo punteggio è salito molto grazie alle consegne effettuate durante i picchi di domanda. Questa settimana ci sono molte ore disponibili per te!').delay(500).fadeIn(1000);
    $('#divergency_0').delay(1000).fadeIn(1000);
});
$('#divergency_0').click(function () {
    arcade_3.pause();arcadeFc_6();
    var selVal_A = $('input[name=option1]:checked').val();
    var selVal_B = $('input[name=option2]:checked').val();
    var selVal_C = $('input[name=option3]:checked').val();
    
    if( $("#clearOptions_1").is(':checked')) {
        $('p.after_motion_p9.note span').html('<strong>-6&euro;</strong><br>Devi acquistare un piano Internet per il telefono, 6 euro sono stati detratti dal tuo reddito');
        $('p.after_motion_p9.note').delay(500).fadeIn(1200).delay(5000).fadeOut(1500);
        var AA = +(document.getElementById("money").innerText);
        var B = 6;
        var CA = +AA - +B; 
        var timeOut_C1 = setTimeout(function(){
                $('#money').addClass('RED_TIMEanimate');
                $('#money').each(function () {
                    $(this).prop('Counter', AA ).animate({
                        Counter: CA
                    }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
                });
                var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C1);
            }, 2000);    
    }
    else if ( $("#clearOptions_2").is(':checked')  && !$("#clearOptions_3").is(':checked') ){
        $('p.after_motion_p9.note span').html('<strong>-6&euro;</strong><br>Devi acquistare un piano Internet per il telefono, 6 euro sono stati detratti dal tuo reddito');
        $('p.after_motion_p9.note').delay(500).fadeIn(1200).delay(5000).fadeOut(1500);
        var AA = +(document.getElementById("money").innerText);
        var B = 6;
        var CA = +AA - +B; 
        var timeOut_C1 = setTimeout(function(){
                $('#money').addClass('RED_TIMEanimate');
                $('#money').each(function () {
                    $(this).prop('Counter', AA ).animate({
                        Counter: CA
                    }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
                });
                var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C1);
            }, 2000); 
    }
    else if ( $("#clearOptions_3").is(':checked')  && !$("#clearOptions_2").is(':checked') ){
        $('p.after_motion_p9.note span').html("<strong>-20&euro;</strong><br>Devi acquistare un'assicurazione aggiuntiva, 20 euro saranno detratti dal tuo reddito");
        $('p.after_motion_p9.note').delay(500).fadeIn(1200).delay(5000).fadeOut(1500);
        var AA = +(document.getElementById("money").innerText);
        var B = 20;
        var CA = +AA - +B; 
        var timeOut_C1 = setTimeout(function(){
                $('#money').addClass('RED_TIMEanimate');
                $('#money').each(function () {
                    $(this).prop('Counter', AA ).animate({
                        Counter: CA
                    }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
                });
                var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C1);
            }, 2000);    
    }
    else if ( $("#clearOptions_3").is(':checked')  && $("#clearOptions_2").is(':checked') ){
        $('p.after_motion_p9.note').remove();
        randomST3();
        $('#continue_07').delay(1000).fadeIn(1000);
    }
    
    $('#divergency_0').fadeOut(1);
    //$('p.after_motion_p9.target').delay(5000).fadeOut(1000);
    $('#continue_07').fadeIn(1000);
});
$('#continue_06').click(function () {
    arcade_3.pause();arcadeFc_6();
    $('#working').fadeIn(100);
    randomBG();
    $('#continue_05, #continue_06, p.after_motion_p8').fadeOut(1);
    $('p.after_motion_p9.target').text('Hai evitato di lavorare in ore di alta domanda di consegne. Il tuo punteggio non è ancora abbastanza alto per poter prenotare molte ore').fadeIn(1000);
    $('#continue_08').delay(500).fadeIn(1000);
});
$('#continue_07').click(function () {
    resetAnimation();
    $('#working').fadeOut(100);
    modal.style.display = 'block';
    $('#hourB').text('35 ore');$('#moneyB').text('246 euro');
    // MONEY SET HERE
    var AA = +(document.getElementById("money").innerText);
    var B = 246;
    var CA = +AA + +B; 
    var timeOut_C1 = setTimeout(function(){
            $('#money').addClass('GREEN_TIMEanimate');
            $('#money').each(function () {
                $(this).prop('Counter', AA ).animate({
                    Counter: CA
                }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
            });
            var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C1);
        }, 1000);
    
    $("#moneyB").text('58 euro');
    $("#hourB").text('8 ore');
      // TIME SET HERE
    var A1 = +(document.getElementById("hour").innerText);
    var B1 = 35;
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
     $('#continue_07, p.after_motion_p9').fadeOut(1);
     $('#continue_09').fadeIn(1500);
});
$('#continue_08').click(function () {
    resetAnimation();
    removeRDback();
    $('.background').addClass('main_bg04');
    modal.style.display = 'block';
    $('#hourB').text('8 ore');$('#moneyB').text('58 euro');
    // MONEY SET HERE
    var AA = +(document.getElementById("money").innerText);
    var B = 58;
    var CA = +AA + +B; 
    var timeOut_C1 = setTimeout(function(){
            $('#money').addClass('GREEN_TIMEanimate');
            $('#money').each(function () {
                $(this).prop('Counter', AA ).animate({
                    Counter: CA
                }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
            });
            var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C1);
        }, 1000);
    
    $("#moneyB").text('58 euro');
    $("#hourB").text('8 ore');
      // TIME SET HERE
    var A1 = +(document.getElementById("hour").innerText);
    var B1 = 8;
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
     $('#continue_08, p.after_motion_p9').fadeOut(1);
     $('#continue_09').fadeIn(1500);
});
$('#continue_09').click(function () {
    transitionM();$('#working').fadeIn(100);
    arcade_6.pause();arcadeFc_5();
    $('#continue_09').fadeOut(1);
    $('.background').removeClass('main_bg04');
    $('.background').addClass('main_bg03');
    randomST4();
    $('#divergency_1').delay(1000).fadeIn(1000);
});
$('#divergency_1').click(function () {
    $('#popup .modal-content').addClass('imprevisto');
     $('#mynotify .notify-content p').html("Novità! Puoi lavorare con un'altra app.<br>L'applicazione per cui lavori attualmente ti paga 4,40 euro lordi a consegna e ti garantisce almeno una consegna all'ora. La nuova app ti pagherebbe 2 euro lordi a consegna più 0.6 euro ogni chilometro percorso, senza consegne garantite, con la possibilità di connetterti e disconnetterti quando vuoi");
    $('#mynotify, .dialogue').css({display: 'block'});
    var popNotific = $("#notification")[0];
    popNotific.play();
    $('.notify-content .icon').addClass('mailANIM');
    
    $('.newApp_p1.O1').delay(0).fadeIn(1000);
    $('.newApp_p1.O2').delay(500).fadeIn(1000);
    $('.newApp_p1.O3').delay(1000).fadeIn(1000);
    $('#divergency_1').fadeOut(1);
});
$('#divergency_2').click(function () {
    resetAnimation();$('#working').fadeOut(100);
    $('#popup .modal-content').removeClass('imprevisto imprevisto-green');
    $('.background').removeClass('main_bg03');
    randomBG();
    $('#hourB').text('61 ore');$('#moneyB').text('401 euro');
    modal.style.display = 'block';
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 401;
    var C0 = +A0 + +B0;
    var timeOut_C2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C2);
    }, 1500);
    
    var A1 = +(document.getElementById("hour").innerText);
    var B1 = 61;
    var C1 = +A1 + +B1;
    var timeOut_D2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_D2);
    }, 1500);
    $('#divergency_2').fadeOut(1);
    $('.newApp_p2.opD_N').delay(1000).fadeIn(1500);
}); 
$('#divergency_3').click(function () {
    resetAnimation();$('#working').fadeOut(100);
    randomBG();
    $('#popup .modal-content').removeClass('imprevisto imprevisto-green');
    
    $('#hourB').text('52 ore');$('#moneyB').text('283 euro');
    modal.style.display = 'block';
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 283;
    var C0 = +A0 + +B0;
    var timeOut_C2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C2);
    }, 1500);
    
    var A1 = +(document.getElementById("hour").innerText);
    var B1 = 52;
    var C1 = +A1 + +B1;
    var timeOut_D2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_D2);
    }, 1500);
    $('#divergency_3').fadeOut(1);
    $('.newApp_p2.opD_N').delay(1000).fadeIn(1500);
}); 
$('#divergency_4').click(function () {
    resetAnimation();$('#working').fadeOut(100);
    $('#popup .modal-content').removeClass('imprevisto imprevisto-green');
    
    $('#hourB').text('42 ore');$('#moneyB').text('319 euro');
    modal.style.display = 'block';
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 319;
    var C0 = +A0 + +B0;
    var timeOut_C2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C2);
    }, 1500);
    
    var A1 = +(document.getElementById("hour").innerText);
    var B1 = 42;
    var C1 = +A1 + +B1;
    var timeOut_D2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_D2);
    }, 1500);
    $('#divergency_4').fadeOut(1);
    $('.newApp_p2.opD_N').delay(1000).fadeIn(1500);
});     
$('#continue_11').click(function() {location.reload();});
$('#clearOptions_1').click(function(){$('input.addOptions_1').attr('checked', false);});
$('input.addOptions_1').click(function(){$('#clearOptions_1').attr('checked', false);});

function newTxt_sector_P6(){
    $('.options.after_motion_p6 .t1').text('PRENOTA LE ORE DISPONIBILI AL POMERIGGIO E SERA');
    $('.options.after_motion_p6 .t2').text('PRENOTA SOLO NEL FINE SETTIMANA');
    $('.options.after_motion_p6 .t3').text('PRENOTA LE ORE DISPONIBILI ALLA SERA');
}    
    
var modal = document.getElementById('popup');
var btn = document.getElementById('continue_02');
var span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
    modal.style.display = 'block';
}
span.onclick = function () {
    modal.style.display = 'none';
    $('#popup .modal-content p').text('Riassunto della settimana');
    $('#hour').removeClass('TIMEanimate');
    $('#money').removeClass('GREEN_TIMEanimate RED_TIMEanimate');
    $('#popup .modal-content').removeClass('imprevisto imprevisto-green');
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        $('#popup .modal-content p').text('Riassunto della settimana');
        $('#popup .modal-content').removeClass('imprevisto imprevisto-green');
    }
}

$('#opA').click(function () {
    transitionM();
    $('p.after_motion_p7, #summary_1').fadeIn(1000);
    removeRDback();
    $('.background').addClass('main_bg03');
    randomST2();resetAnimation();
    $('.after_motion_p6').fadeOut(1);
    $('#hourB').text('12 ore');$('#moneyB').text('86 euro');
});
$('#summary_1').click(function(){
    $('#working').fadeOut(100);
    $('.background').removeClass('main_bg03');
    randomBG();
    modal.style.display = 'block';
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 86;
    var C0 = +A0 + +B0;
    var timeOut_A2 = setTimeout(function(){
        $('#money').addClass('RED_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_A2);
    }, 1500);
    
    var A1 = +(document.getElementById("hour").innerText);
    var B1 = 12;
    var C1 = +A1 + +B1;
    var timeOut_B2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_B2);
    }, 1500);
    $('#summary_1, p.after_motion_p7').fadeOut(500);
    $('p.after_motion_p8').delay(2000).fadeIn(1000);
    $('#continue_05').delay(1000).fadeIn(1000);
    $('#continue_06').delay(1000).fadeIn(1500);
});    
$('#opB').click(function(){
    transitionM();
    $('#continue_04, p.after_motion_p7, #summary_2').fadeIn(1000);
    removeRDback();
    $('.background').addClass('main_bg03');
    randomST2();resetAnimation();
    $('.after_motion_p6').fadeOut(1);
    $('#hourB').text('8 ore');$('#moneyB').text('62 euro');
});
$('#summary_2').click(function(){
    $('#working').fadeOut(100);
    $('#summary_2, p.after_motion_p7').fadeOut(500);
    $('#continue_04').delay(1000).fadeIn(1500);
    $('p.after_motion_p8').delay(2000).fadeIn(1000);
    $('#continue_05').delay(1000).fadeIn(1000);
    $('#continue_06').delay(1000).fadeIn(1500);
    $('.background').removeClass('main_bg03');
    randomBG();
    modal.style.display = 'block';
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 62;
    var C0 = +A0 + +B0;
    var timeOut_A2 = setTimeout(function(){
        $('#money').addClass('RED_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_A2);
    }, 1500);
    
    var A1 = +(document.getElementById("hour").innerText);
    var B1 = 8;
    var C1 = +A1 + +B1;
    var timeOut_B2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_B2);
    }, 1500);
});
$('#opC').click(function(){
    transitionM();
    $('#continue_04, p.after_motion_p7, #summary_3').fadeIn(1000);
    removeRDback();
    $('.background').addClass('main_bg03');
    randomST2();resetAnimation();
    $('.after_motion_p6').fadeOut(1);
    $('#hourB').text('20 ore');$('#moneyB').text('148 euro');
});
$('#summary_3').click(function(){
    $('#working').fadeOut(100);
    $('#summary_3, p.after_motion_p7').fadeOut(500);
    $('#continue_04').delay(1000).fadeIn(1500);
    $('p.after_motion_p8').delay(2000).fadeIn(1000);
    $('#continue_05').delay(1000).fadeIn(1000);
    $('#continue_06').delay(1000).fadeIn(1500);
    $('.background').removeClass('main_bg03');
    randomBG();
    modal.style.display = 'block';
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 148;
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
    var B1 = 20;
    var C1 = +A1 + +B1;
    var timeOut_B2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_B2);
    }, 1500);
});
    
$('#opA_N').click(function(){
    $('#working').fadeOut(100);transitionM();resetAnimation();arcade_5.pause();arcadeFc_4();
    randomBG();
    $('#popup .modal-content').removeClass('imprevisto imprevisto-green');
    
    $('#hourB').text('55 ore');$('#moneyB').text('329 euro');
    modal.style.display = 'block';
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 329;
    var C0 = +A0 + +B0;
    var timeOut_C2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C2);
    }, 1500);
    
    var A1 = +(document.getElementById("hour").innerText);
    var B1 = 55;
    var C1 = +A1 + +B1;
    var timeOut_D2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_D2);
    }, 1500); 
    
    $('.options.newApp_p1').fadeOut(1);
    $('#summary_4').fadeIn(1500);
});
$('#summary_4').click(function(){
    randomST5();$('#working').fadeIn(100);
    $('#summary_4').fadeOut();
    $('#divergency_2').delay(1000).fadeIn(1500);
    removeRDback();
    $('.background').addClass('main_bg03');
});
$('#opB_N').click(function(){
    $('#working').fadeOut(100);transitionM();resetAnimation();arcade_5.pause();arcadeFc_4();
    randomBG();
    $('#popup .modal-content').removeClass('imprevisto imprevisto-green');
    $('#hourB').text('47 ore');$('#moneyB').text('213 euro');
    modal.style.display = 'block';
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 213;
    var C0 = +A0 + +B0;
    var timeOut_C2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C2);
    }, 1500);
    
    var A1 = +(document.getElementById("hour").innerText);
    var B1 = 47;
    var C1 = +A1 + +B1;
    var timeOut_D2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_D2);
    }, 1500); 
    
    $('.options.newApp_p1').fadeOut(1);
    $('#summary_5').fadeIn(1500);
}); 
$('#summary_5').click(function(){
    randomST5();$('#working').fadeIn(100);
    $('#summary_5').fadeOut();
    $('#divergency_3').delay(1000).fadeIn(1500);
});    
$('#opC_N').click(function(){
    $('#working').fadeOut(100);transitionM();resetAnimation();arcade_5.pause();arcadeFc_4();
    $('#popup .modal-content').removeClass('imprevisto imprevisto-green');
    $('#hourB').text('37 ore');$('#moneyB').text('266 euro');
    randomBG();
    modal.style.display = 'block';
    var A0 = +(document.getElementById("money").innerText);
    var B0 = 266;
    var C0 = +A0 + +B0;
    var timeOut_C2 = setTimeout(function(){
        $('#money').addClass('GREEN_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_C2);
    }, 1500);
    
    var A1 = +(document.getElementById("hour").innerText);
    var B1 = 37;
    var C1 = +A1 + +B1;
    var timeOut_D2 = setTimeout(function(){
        $('#hour').addClass('TIMEanimate');
        $('#hour').each(function () {
            $(this).prop('Counter', A1 ).animate({
                Counter: C1
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        clearTimeout(timeOut_D2);
    }, 1500); 
    
    $('.options.newApp_p1').fadeOut(1);
    $('#summary_6').fadeIn(1500);
});
$('#summary_6').click(function(){
    randomST5();$('#working').fadeIn(100);
    $('#summary_6').fadeOut();
    $('#divergency_4').delay(1000).fadeIn(1500);
    $('.background').removeClass('main_bg03');
    randomBG();
});    

$('#opD_N').click(function(){
    $('#working').fadeOut(2000);
    $('.newApp_p2.opD_N').fadeOut(1);
    $('p.newApp_p4').delay(1500).fadeIn(1500);
    $('#continue_11').delay(3000).fadeIn(1500);
    $('.background').removeClass('main_bg04');
    randomBG();
    resetAnimation();
    var A0 = +(document.getElementById("money").innerText);
    var B0 = Math.round( +A0 * 0.2 );
    var C0 = +A0 - +B0;
    var timeOut_Z0 = setTimeout(function(){
        $('#money').addClass('RED_TIMEanimate');
        $('#money').each(function () {
            $(this).prop('Counter', A0 ).animate({
                Counter: C0
            }, {duration: 2000,easing: 'swing',step: function (now) {$(this).text(Math.ceil(now));}});
        });
        var kching = $("#kching")[0]; kching.play(); clearTimeout(timeOut_Z0);
        document.getElementById("moneyB").innerHTML = C0 + ' euro';
        var HR0 = +(document.getElementById("hour").innerText);
        document.getElementById("hourB").innerHTML = HR0 + ' ore';
        $('#popup .modal-content p').text("Hai completato il tuo primo mese da ciclofattorino!");
        $(".modal").css({display: 'block'});
    }, 1500);
});   
}    