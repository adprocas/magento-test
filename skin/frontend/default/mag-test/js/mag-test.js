$(document).ready(function () {
	$('#category-dropdown').on('click', function (event) {
	    $(this).parent().toggleClass('open');
	});

	$('body').on('click', function (e) {
	    if (!$('.dropdown').is(e.target) 
	        && $('.dropdown').has(e.target).length === 0 
	        && $('.open').has(e.target).length === 0
	    ) {
	        $('.dropdown').removeClass('open');
	    }
	});

	$('.Dropdown-Column-one li').on('click', function(event) {
		event.preventDefault();
		$('.category-name').html($(this).find('a').html());
		$('.dropdown-column-one li').removeClass('active');
		$(this).addClass('active');
	});
});