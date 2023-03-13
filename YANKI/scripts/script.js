$('.category_block').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
        items:4,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:2,
            nav: true,
            dots: true
        },
        600:{
            items:3
        },
        1000:{
            items:4,
            loop:true,
            dots: true
        },
        1600:{
            items:4
        },
        2000:{
            items:4
        }
    }
})