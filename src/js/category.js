$(document).ready(function(){
	if (localStorage.length > 0) {
		$('.basket').css('visibility', 'visible');
		var totalSum = 0;
		for (var i in localStorage) {
			var listElems = JSON.parse(localStorage.getItem(i));
			if (listElems != null) {
				var result = listElems['model']+" "+listElems['quantity']+"шт "+listElems['price']+" грн";
				totalSum += parseInt(listElems['price'].replace(',','')) * parseInt(listElems['quantity']);
				$('.basket .list').append('<li>'+result+'<i class="remove"></i></li>');
			}
		}
		showResult(totalSum);
	} else {
		$('.basket').css('visibility', 'hidden');
	}
});

function numberWithCommas(x) {
    x = parseFloat(Math.round(x * 100) / 100).toFixed(2);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showResult(totalSum) {
	$('.total').text(numberWithCommas(totalSum));
	$('.val').text(localStorage.length);
	$('.list li .remove').click(function(){
		var totalSum = 0;
		for (var i in localStorage) {
			var listElems = JSON.parse(localStorage.getItem(i));
			if (listElems != null && $(this).parent().text().indexOf(i) != -1) {
				$(this).parent().remove();
				localStorage.removeItem(i);
			} else if (listElems != null) {
				totalSum += parseInt(listElems['price'].replace(',','')) * parseInt(listElems['quantity']);
			}
		}
		if (localStorage.length == 0) {
			$('.basket').css('visibility', 'hidden');
		}
		showResult(totalSum);
	});
}
