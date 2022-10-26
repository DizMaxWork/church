$(document).ready(function (){
    $(".bars").on("click",function(){
        $(".mobile-menu").fadeIn() 
    });
    $(".mobile-menu__close").on("click", function(){
        $(".mobile-menu").fadeOut()
    });

    $(".slick").slick({
        slidesToShow:10,
        nextArrow: "<div class='arrow-2'></div>",
        prevArrow: "<div class='arrow-1'></div>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:8,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:6,
                } 
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:4,
                } 
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:3,
                } 
            }
        ]
    })
})