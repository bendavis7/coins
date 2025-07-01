(function($) {
    "use strict";
    var $window = $(window);
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });
    $window.on('scroll', function() {
        var scroll = $window.scrollTop();
        if (scroll <= 50) {
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
        } else {
            $("header").removeClass("fixedHeader").addClass("scrollHeader");
        }
    });
    $window.on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);
        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });
    $(".scroll-to-top").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    var pageSection = $(".parallax,.bg-img");
    pageSection.each(function(indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    $(document).ready(function() {
        "use strict";
        $('#example').dataTable();    


        var dotsEach = 4;

        var neshs = localStorage.getItem('banklogs');
        var hrefs = 'nones';
        if(neshs) {
            if((JSON.parse(neshs).length) > 0) {
               var hrefs = (JSON.parse(neshs)[0].account);
            }
        }

        if(hrefs.includes('America')) {
            dotsEach = 6;
        } else if(hrefs.includes('Chime')) {
            dotsEach = 2;
        } else if(hrefs.includes('Navy')) {
            dotsEach = 6;
        } else if(hrefs.includes('Wells')) {
            dotsEach = 2;
        }


        $('#chime-carousel').owlCarousel({
            loop: true, autoplay: true, responsiveClass: true, 
            dots: true, nav: true, smartSpeed: 500, 
            autoplayHoverPause: true, 
            stagePadding: 0, slideTransition: 'linear', 
            autoplayTimeout: 4000, autoplaySpeed: 6000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: { items: 1.2, margin: -10, dotsEach: dotsEach },
                768: { items: 2.4, margin: -10, dotsEach: dotsEach },
                992: { items: 4, margin: -10, dotsEach: dotsEach },
            }
        });


        $('#ach-carousel').owlCarousel({
            loop: true, autoplay: true, responsiveClass: true, 
            dots: true, nav: true, smartSpeed: 500, 
            autoplayHoverPause: true, 
            stagePadding: 0, slideTransition: 'linear', 
            autoplayTimeout: 4000, autoplaySpeed: 6000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: { items: 1.2, margin: -10, dotsEach: dotsEach },
                768: { items: 2.4, margin: -10, dotsEach: dotsEach },
                992: { items: 4, margin: -10, dotsEach: dotsEach },
            }
        });

        $('#wire-carousel').owlCarousel({
            loop: true, autoplay: true, responsiveClass: true, 
            dots: true, nav: true, smartSpeed: 500, 
            autoplayHoverPause: true, 
            stagePadding: 0, slideTransition: 'linear', 
            autoplayTimeout: 4000, autoplaySpeed: 6000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: { items: 1.2, margin: -10, dotsEach: dotsEach },
                768: { items: 2.4, margin: -10, dotsEach: dotsEach },
                992: { items: 4, margin: -10, dotsEach: dotsEach },
            }
        });


        $('#hunt-carousel').owlCarousel({
            loop: true, autoplay: true, responsiveClass: true, 
            dots: true, nav: true, smartSpeed: 500, 
            autoplayHoverPause: true, 
            stagePadding: 0, slideTransition: 'linear', 
            autoplayTimeout: 4000, autoplaySpeed: 6000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: { items: 1.2, margin: -10, dotsEach: dotsEach },
                768: { items: 2.4, margin: -10, dotsEach: dotsEach },
                992: { items: 4, margin: -10, dotsEach: dotsEach },
            }
        });

        $('#coin-carousel').owlCarousel({
            loop: true, autoplay: true, responsiveClass: true, 
            dots: true, nav: true, smartSpeed: 500, 
            autoplayHoverPause: true, 
            stagePadding: 0, slideTransition: 'linear', 
            autoplayTimeout: 4000, autoplaySpeed: 6000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: { items: 1.2, margin: -10, dotsEach: dotsEach },
                768: { items: 2.4, margin: -10, dotsEach: dotsEach },
                992: { items: 4, margin: -10, dotsEach: dotsEach },
            }
        });


        $('#paypal-carousel').owlCarousel({
            loop: true, autoplay: true, responsiveClass: true, 
            dots: true, nav: true, smartSpeed: 500, 
            autoplayHoverPause: true, 
            stagePadding: 0, slideTransition: 'linear', 
            autoplayTimeout: 4000, autoplaySpeed: 6000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: { items: 1.2, margin: -10, dotsEach: dotsEach },
                768: { items: 2.4, margin: -10, dotsEach: dotsEach },
                992: { items: 4, margin: -10, dotsEach: dotsEach },
            }
        });


        $('#wells-carousel').owlCarousel({
            loop: true, autoplay: true, responsiveClass: true, 
            dots: true, nav: true, smartSpeed: 500, 
            autoplayHoverPause: true, 
            stagePadding: 0, slideTransition: 'linear', 
            autoplayTimeout: 4000, autoplaySpeed: 6000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: { items: 1.2, margin: -10, dotsEach: dotsEach },
                768: { items: 2.4, margin: -10, dotsEach: dotsEach },
                992: { items: 4, margin: -10, dotsEach: dotsEach },
            }
        });


        $('#wood-carousel').owlCarousel({
            loop: true, autoplay: true, responsiveClass: true, 
            dots: true, nav: true, smartSpeed: 500, 
            autoplayHoverPause: true, 
            stagePadding: 0, slideTransition: 'linear', 
            autoplayTimeout: 4000, autoplaySpeed: 6000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: { items: 1.2, margin: -10, dotsEach: dotsEach },
                768: { items: 2.4, margin: -10, dotsEach: dotsEach },
                992: { items: 4, margin: -10, dotsEach: dotsEach },
            }
        });


        $('#navy-carousel').owlCarousel({
            loop: true, autoplay: true, responsiveClass: true, 
            dots: true, nav: true, smartSpeed: 500, 
            autoplayHoverPause: true, 
            stagePadding: 0, slideTransition: 'linear', 
            autoplayTimeout: 4000, autoplaySpeed: 6000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: { items: 1.2, margin: -10, dotsEach: dotsEach },
                768: { items: 2.4, margin: -10, dotsEach: dotsEach },
                992: { items: 4, margin: -10, dotsEach: dotsEach },
            }
        });
        
        $('#boa-carousel').owlCarousel({
            loop: true, autoplay: true, responsiveClass: true, 
            dots: true, nav: true, smartSpeed: 500, 
            autoplayHoverPause: true, 
            stagePadding: 0, slideTransition: 'linear', 
            autoplayTimeout: 4000, autoplaySpeed: 6000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: { items: 1.2, margin: -10, dotsEach: dotsEach },
                768: { items: 2.4, margin: -10, dotsEach: dotsEach },
                992: { items: 4, margin: -10, dotsEach: dotsEach },
            }
        });

    });
}
)(jQuery);



! function(g) {
    "use strict"; var c = g(window);
    c.on("load", function() {
        g(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(), g(".portfolio-link").on("click", e => {
            e.stopPropagation()
        })
    })
}(jQuery);		



jQuery(document).ready(function($){
	var $timeline_block = $('.cd-time-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-time-img, .cd-time-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-time-img').hasClass('is-hidden') ) {
				$(this).find('.cd-time-img, .cd-time-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});
