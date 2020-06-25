$(document).ready(function () {

    $('.big-slider').owlCarousel({
        loop: true,
        autoWidth: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        items: 1,
        dots: true
    })
    
    
    $('.small-slider').owlCarousel({
        margin: 60,
        loop: true,
        autoWidth: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        autoplayHoverPause: true,
        nav: true,
        dots: false
    })
    
    });