(function ($)
  { "use strict"
    $(window).on('load', function () {
      $('#loader').fadeOut('slow');
      $('.site-body').delay(1200).css({
        'display': 'inherit'
      });
    });
})(jQuery);

jQuery(function($) {
    $(window).on('scroll', function() {
    if ($(this).scrollTop() >= 200) {
      $('.navbar').addClass('fixed-top');
    } else if ($(this).scrollTop() == 0) {
      $('.navbar').removeClass('fixed-top');
    }
  });
});































(function($) {
    "use strict";

	// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
	// 	target: '.navbar-fixed-top',
    //     offset: 60
	//   })

    // $('body').scrollspy({
    //     target: '.navbar-fixed-top',
    //     offset: 60
    // });

    // $('#topNav').affix({
    //     offset: {
    //         top: 200
    //     }
    // });
    
    // $('a.page-scroll').bind('click', function(event) {
    //     var $ele = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: ($($ele.attr('href')).offset().top - 60)
    //     }, 1450, 'easeInOutExpo');
    //     event.preventDefault();
    // });
    
    // $('.navbar-collapse ul li a').click(function() {
    //     /* always close responsive nav after click */
    //     $('.navbar-toggle:visible').click();
    // });

    // $('#galleryModal').on('show.bs.modal', function (e) {
    //    $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    // });

})(jQuery);