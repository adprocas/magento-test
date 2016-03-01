$.noConflict(); // jQuery is known to not work nicely with Magento

jQuery(document).ready(function () {
	jQuery('#category-dropdown').on('click', function (event) {
	    jQuery(this).parent().toggleClass('open');
	});

	jQuery('body').on('click', function (e) {
	    if (!jQuery('.dropdown').is(e.target) 
	        && jQuery('.dropdown').has(e.target).length === 0 
	        && jQuery('.open').has(e.target).length === 0
	    ) {
	        jQuery('.dropdown').removeClass('open');
	    }
	});

	jQuery('.dropdown-column-one li').on('click', function(event) {
		event.preventDefault();
		jQuery('.category-name').html(jQuery(this).find('a').html());
		jQuery('.dropdown-column-one li').removeClass('active');
		jQuery(this).addClass('active');
	});
});