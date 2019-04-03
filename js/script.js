//Nav toggle effect 
$('.menu').on('click', function(){
    $(this).toggleClass('active');
    $('.overlay').toggleClass('menu-open');
});

//Scroll effect
$('nav a').on('click', function(){
$('.menu').removeClass('active');
$('.overlay').removeClass('menu-open');
});