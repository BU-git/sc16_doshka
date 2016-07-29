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

calculateResult();

function calculateResult() {
    totalSum.innerHTML = price.innerHTML * counter.value + ' грн';    
}
