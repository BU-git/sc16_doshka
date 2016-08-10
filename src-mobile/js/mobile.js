$(document).ready(function () {
	$('body').append('<h1>Переверните пожалуйста обратно.</h1>');
	$('h1').css({
		'text-align' : 'center',
		'color' : 'white',
		'margin-top' : '-20%',
	})
});
$(function () {
	var btn = $('.nav_btn, .search_btn');
	btn.click(function(){
	    btn.siblings().not(this).removeClass('active');
	    $(this).toggleClass('active');
	});
});
