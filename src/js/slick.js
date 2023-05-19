$(".press__slider").slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                autoplay: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 430,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
            },
        },
    ],
});

$(".n-slider").slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 430,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
        },
    ],
});

// $(".news-block").slick({
//     autoplay: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: true,
//     responsive: [
//         {
//             breakpoint: 430,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 arrows: false,
//             },
//         },
//     ],
// });
