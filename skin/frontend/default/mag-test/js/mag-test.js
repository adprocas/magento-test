$(document).ready(function () {
	$('#Shop_Dropdown').on('click', function (event) {
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
		$('.Category_Name').html($(this).find('a').html());
		$('.Dropdown-Column-one li').removeClass('active');
		$(this).addClass('active');
	});
});