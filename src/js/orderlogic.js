$('.basketadd').click(function(){
	var elem = {
		'model' : $(this).parent().parent().find('h1').text(),
		'quantity' : 1,
		'price' : $(this).parent().parent().find('.cost').text().replace(' грн',''),
	}
	totalSum = 0;
	var text = elem.model+" "+elem.quantity+" "+elem.price;
	var listElems = JSON.parse(localStorage.getItem(elem.model));
	if (listElems != null && listElems['model'] == elem.model) {
		elem.quantity += listElems['quantity'];
		var result = listElems['model']+" "+listElems['quantity']+"шт "+listElems['price']+" грн";
		totalSum += parseInt(listElems['price'].replace(',','')) * parseInt(listElems['quantity']);
	}
	localStorage.setItem(elem.model, JSON.stringify(elem));
	showResult(totalSum);
	if (localStorage.length > 0) {
		$('.basket').css('visibility', 'visible');
		$('.basket .list').append('<li>'+result+'<i class="remove"></i></li>');
	} else {
		$('.basket').css('visibility', 'hidden');
	}
});

$('.buy').click(function(){
	var elem = {
		'model' : $(this).parent().parent().find('h1').text(),
		'quantity' : 1,
		'price' : $(this).parent().parent().find('.cost').text().replace(' грн',''),
	}
	var text = elem.model+" "+elem.quantity+" "+elem.price;
	var listElems = JSON.parse(localStorage.getItem(elem.model));
	if (listElems != null && listElems['model'] == elem.model) {
		elem.quantity += listElems['quantity'];
	}
	localStorage.setItem(elem.model, JSON.stringify(elem));
});

function numberWithCommas(x) {
    x = parseFloat(Math.round(x * 100) / 100).toFixed(2);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function showResult(totalSum) {
	$('.total').text(numberWithCommas(totalSum));
	$('.val').text(function(){
		var quantity = 0;
		for (var i in localStorage) {
			var listElems = JSON.parse(localStorage.getItem(i));
			if (listElems != null) {
				quantity += parseInt(listElems['quantity']);
			}
		}
		return quantity;
	});
}


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