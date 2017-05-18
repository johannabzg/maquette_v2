$(document).ready(function(){

     $('#char_2').css('opacity', 0);
     $('#char_1').show;

    function charge_page(){
     $('#char_2').css('opacity', 10);
     $('#char_1').css('opacity', 0);
};
    setTimeout(charge_page, 4000);

});

/*
 var apparition = function(){
    $("#char_2").hide;
    $("#char_1").show;
}
 setTimeout(apparition, 1000);
*/
