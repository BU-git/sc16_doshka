$('.basketadd').click(function(){
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
