// portrait orientation only
$(document).ready(function () {
  function reorient(e) {
    var portrait = (window.orientation % 180 == 0);
    if (!portrait) {
    	$("body").css("visibility", "hidden");
    	$("body").attr("h1").text("Переверните ваш телефон обратно.");
    }
  }
});



function hello ()	{
	alert("Working")
 };

 
  $(function () {
    var btn = $('.nav_btn, .search_btn');
    btn.click(function(){
        btn.siblings().not(this).removeClass('active');
        $(this).toggleClass('active');
    });
  });
