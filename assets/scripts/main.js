(function($) {
	$(document).ready(function() {
		$('.faq-accordion').accordion({
          header: '.faq-title',
          heightStyle: 'content'
        });

        $('.tooltip').on('click', function(e) {
        	e.preventDefault();

        	var tooltip = $(this).data('definition');
        	console.log(tooltip);
        	$('.tooltip-content.' + tooltip).addClass('active');
        });

        $('.tooltip-content').on('click', function() {
        	$(this).removeClass('active');
        });

        $('.login a').on('click', function(e) {
            e.preventDefault();
            var scrolltop = $('#login').offset().top - $('.site-header').outerHeight();
            $("html, body").animate({ scrollTop: scrolltop }, 600);
            return false;
        });
	});
})(jQuery);