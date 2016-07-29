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
              required: true
            },
            city:{
                required: true,
                minlength: 2,
            },
        },
        messages:{
            firstName:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть задано минимум 1 символ",
            },
            tel:{
                required: "Это поле обязательно для заполнения",
                minlength: "Номер должен быть задан полностью +380123456789",
                maxlength: "Номер должен быть задан полностью +380123456789",
            },
            email:{
                required: "Введите верный email",
            },
            city:{
                required: "Это поле обязательно для заполнения",
                minlength: "Город должен быть задан минимум 2 символами",
            },
        }
    });
});
