$(document).ready(function(){
    $(".client-info").validate({
        rules:{
            firstName:{
                required: true,
                minlength: 1,
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
                minlength: 2,
            },
        },
        messages:{
            firstName:{
                required: "<br>Это поле обязательно для заполнения",
                minlength: "<br>Имя должно быть задано минимум 1 символ",
            },
            tel:{
                required: "<br>Это поле обязательно для заполнения",
                minlength: "<br>Номер должен быть задан форматом +380",
                maxlength: "<br>Номер должен быть задан форматом +380",
            },
            email:{
                required: "<br>Это поле обязательно для заполнения",
                email: "<br>Введите верный email",
            },
            city:{
                required: "<br>Это поле обязательно для заполнения",
                minlength: "<br>Город должен быть задан минимум 2 символами",
            },
        }
    });
});

price.innerHTML = numberWithCommas(price.innerHTML);
calculateResult();

function calculateResult() {
    if (counter.value <= 0) {
        counter.value = 1;
    }
    counter.value = counter.value.replace('.', '');
    var priceTemp = price.innerHTML.replace(',', '');
    totalSum.innerHTML = 'ИТОГО ' + numberWithCommas(priceTemp * counter.value) + ' грн'; 
}

function numberWithCommas(x) {
    x = parseFloat(Math.round(x * 100) / 100).toFixed(2);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
