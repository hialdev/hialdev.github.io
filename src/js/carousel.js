var projects = $('.projects-carousel');
projects.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoWidth:true,
    lazyLoad:true,
    responsive:{
        0:{
            autoWidth:false,
            items:1
        },
        600:{
            autoWidth:false,
            items:1
        },
        1000:{
            items:3
        }
    }
})

$('.nextBtn').click(function() {
    projects.trigger('next.owl.carousel');
})
$('.prevBtn').click(function() {
    projects.trigger('prev.owl.carousel', [300]);
})

var news = $('.news-carousel');
news.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    dotsContainer: '.news-dots',
    lazyLoad:true,
    autoplay:true,
    items:1
})