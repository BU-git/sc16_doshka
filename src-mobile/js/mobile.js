// portrait orientation only
$(document).ready(function () {
  function reorient(e) {
    var portrait = (window.orientation % 180 == 0);
    $("body > div").css("-webkit-transform", !portrait ? "rotate(-90deg)" : "");
  }
  window.onorientationchange = reorient;
  window.setTimeout(reorient, 0);
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
