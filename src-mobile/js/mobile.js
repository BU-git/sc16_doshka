// $(window).on("orientationchange",function(){
// 	if(window.orientation == 0)
// 	{
// 	  // $('body').text("The orientation has changed to portrait!").css({"background-color":"yellow","font-size":"300%"});
// 	}
// 	else
// 	{
// 	  // $('body').text("The orientation has changed to landscape!").css({"background-color":"pink","font-size":"200%"});
// 	}
// });

$(function () {
	var btn = $('.nav_btn, .search_btn');
	btn.click(function(){
	    btn.siblings().not(this).removeClass('active');
	    $(this).toggleClass('active');
	});
});
