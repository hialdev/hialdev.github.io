$('.hero-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:30,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true
})

var project = $('.project-carousel');

project.owlCarousel({
    loop:true,
    items:1,
    margin:30,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive : {
        // breakpoint from 0 up
        0 : {
            autoWidth:false,
        },
        // breakpoint from 480 up
        480 : {
            autoWidth:false,

        },
        // breakpoint from 768 up
        768 : {
            autoWidth:true,
        }
    },
})
// Go to the next item
$('.next').click(function() {
    project.trigger('next.owl.carousel');
})
// Go to the prev item
$('.prev').click(function() {
    project.trigger('prev.owl.carousel');
})


$('.post-carousel').owlCarousel({
    loop:true,
    margin:30,
    items:1,
    dots:false,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive : {
        // breakpoint from 0 up
        0 : {
            autoWidth:false,
        },
        // breakpoint from 480 up
        480 : {
            autoWidth:true,

        },
        // breakpoint from 768 up
        768 : {
            autoWidth:true,
        }
    },
})