// Selecteur sur lequel on click ! on hésite pas à creer une id sur le bon lien ;)
$('.nav #presentation-nav').on('click', function(e) {
   var timer = window.setInterval(function() {
    var scrollTop = $('html, body').scrollTop() + 250; //coordonné en pixel (+2000 px)
    console.log(scrollTop);
    $('html, body').animate({'scrollTop': scrollTop}, 3000); // durée pour scroll en ms (3000 ms = 3s)
    }, 30);
}).on('mouseleave', function(e) {
    window.clearInterval(timer);

    location.reload();

});

$('.nav #documentation-nav').on('click', function(e) {
   var timer = window.setInterval(function() {
    var scrollTop = $('html, body').scrollTop() + 4800;
    console.log(scrollTop);
    $('html, body').animate({'scrollTop': scrollTop}, 3000);
    }, 30);
}).on('mouseleave', function(e) {
    window.clearInterval(timer);

    location.reload();

});

$('.nav #options-nav').on('click', function(e) {
    var timer = window.setInterval(function() {
    var scrollTop = $('html, body').scrollTop() + 7200;
    console.log(scrollTop);
    $('html, body').animate({'scrollTop': scrollTop}, 3000);
    }, 30);
}).on('mouseleave', function(e) {
    window.clearInterval(timer);

    location.reload();

});

$('.nav #contact-nav').on('click', function(e) {
    var timer = window.setInterval(function() {
    var scrollTop = $('html, body').scrollTop() + 12000;
    console.log(scrollTop);
    $('html, body').animate({'scrollTop': scrollTop}, 3000);
    }, 30);
}).on('mouseleave', function(e) {
    window.clearInterval(timer);

    location.reload();

});
