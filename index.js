$(document).ready(function(){
    //top sales
    $("#Top-sales .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 5
            }
        }
    });

    //isotope filter
    var $grid= $('.grid').isotope({
        itemSelector: '.grid-item',
        layout: 'fitRow'
    });

    //filter item on button click
    $(".button-group").on("click", "button", function(){
        filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    })

});