$(document).ready(function(){
    $(".client-info").validate({
        rules:{
            firstName:{
                required: true,
            },
            tel:{
                required: true,
                minlength: 13,
                maxlength: 13,
            },
            email:{
              required: true,
              email: true,
            },
            city:{
                required: true,
            },
        },
        messages:{
            firstName:{
                required: '<br>Это поле обязательно для заполнения',
            },
            tel:{
                required: "<br>Это поле обязательно для заполнения",
                minlength: "<br>Укажите номер в формате +380",
                maxlength: "<br>Укажите номер в формате +380",
            },
            email:{
                required: "<br>Это поле обязательно для заполнения",
                email: "<br>Введите верный email",
            },
            city:{
                required: "<br>Это поле обязательно для заполнения",
            },
        },
    });
});

price.innerHTML = numberWithCommas(price.innerHTML);
calculateResult();

function calculateResult() {
    if (counter.value <= 0) {
        counter.value = 1;
    }
    counter.value = parseInt(counter.value);
    var priceTemp = price.innerHTML.replace(',', '');
    totalSum.innerHTML = 'ИТОГО ' + numberWithCommas(priceTemp * counter.value) + ' грн'; 
}

function numberWithCommas(x) {
    x = parseFloat(Math.round(x * 100) / 100).toFixed(2);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function sendInfo() {
    var form = $('.client-info');

    if (form.valid() == true) {
        var clientInfo = {
            'cFirstName' : ('Имя: ' + firstName.value),
            'cTel' : ('Тел: ' + tel.value),
            'cEmail' : ('email: ' + email.value),
            'cCity' : ('Город: ' + city.value),
            'cComment' : ('Примечание к заказу: ' + comment.value),
        }

        var itemInfo = {
            'iCategory' : ('Категория: ' + category.innerHTML),
            'iItem' : ('Товар: ' + item.innerHTML),
            'iQuantity' : ('Количество: ' + counter.value),
            'iPrice' : ('Цена за штуку: ' + price.innerHTML),
        }

        var txt = "Заказчик:\n";

        for (i in clientInfo) {
            txt += "\t" + clientInfo[i] + "\n";
        }

        txt += "Товар:\n";

        for (i in itemInfo) {
            txt += "\t" + itemInfo[i] + "\n";
        }

        txt += totalSum.innerHTML;

        $('.info').css('visibility', 'hidden');
        $('.order-list').css('visibility', 'hidden');
        $('.submit-sum').css('visibility', 'hidden');
        $('.done').css('visibility', 'visible');
        alert(txt);
        // emailjs.init("user_8DoEkLvFtuq0IWPUxSCd5");
        // emailjs.send("gmail","template_wcvY3Sye",{message_html: info});
    }
    

}
