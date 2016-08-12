$(function () {
	var btn = $('.nav_btn, .search_btn');
	btn.click(function(){
	    btn.siblings().not(this).removeClass('active');
	    $(this).toggleClass('active');
	});
});
