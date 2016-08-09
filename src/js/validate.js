$(document).ready(function () {
    // initialize tooltipster on text input elements
    $('.client-info input[type="text"]').tooltipster({
        trigger: 'custom',
        onlyOne: false,
        position: 'right'
    });

    // initialize validate plugin on the form
    $('.client-info').validate({
        errorPlacement: function (error, element) {
                        
            var lastError = $(element).data('lastError'),
                newError = $(error).text();
            
            $(element).data('lastError', newError);
                            
            if(newError !== '' && newError !== lastError){
                $(element).tooltipster('content', newError);
                $(element).tooltipster('show');
            }
            $(element).css('borderColor', 'red');
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
            $(element).css('borderColor', 'yellowgreen');
        },
        rules:{
            firstName:{
                required: true,
            },
            tel:{
                required: true,
                minlength: 10,
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
                required: 'Это поле обязательно для заполнения',
            },
            tel:{
                required: "Это поле обязательно для заполнения",
                minlength: "Укажите верный номер",
            },
            email:{
                required: "Это поле обязательно для заполнения",
                email: "Введите верный email",
            },
            city:{
                required: "Это поле обязательно для заполнения",
            },
        },
    });
});


calculateResult();
showInfo();

if (localStorage.length == 0) {
    $(location).attr('href', 'category.html');
}

$('.submit').hover(
  function() {
    if ($('.client-info').valid()) {
        $('.submit').css({
            'text-shadow' : '1px 1px 1px greenyellow, 0 0 1em greenyellow',
            'box-shadow' : '1px 1px 1px greenyellow, 0 0 1em greenyellow',
            'borderColor' : 'yellowgreen',
            'color' : 'yellowgreen',
        });
    } else {
        $('.submit').css({
            'text-shadow' : '1px 1px 1px red, 0 0 1em red',
            'box-shadow' : '1px 1px 1px red, 0 0 1em red',
            'borderColor' : 'red',
            'color' : 'red',
        });
    }
  }
  , function() {
    $('.submit').css({
        'text-shadow' : 'none',
        'box-shadow' : 'none',
        'borderColor' : 'black',
        'color' : 'black',
    });
  }
);

function showInfo(){
    var totalSum = 0;
    for (var i in localStorage) {
        var listElems = JSON.parse(localStorage.getItem(i));
        if (listElems != null) {
            totalSum += parseInt(listElems['price'].replace(',','')) * parseInt(listElems['quantity']);
            $('.order-list ul').append('<li>'+listElems['model']+' - '+listElems['quantity']+'шт - '+listElems['price']+' грн<a class="remove"></a></li>');
        }
    }
    calculateResult(totalSum);
}

function calculateResult(totalSum) {
    $('.totalSum').text('ИТОГО ' + numberWithCommas(totalSum) + " грн");
    $('.val').text(localStorage.length);
    $('ul li .remove').click(function(){
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
            alert('У вас нет покупок.');
            $(location).attr('href', 'category.html');
        }
        calculateResult(totalSum);
    });
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
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

        var txt = "";

        for (i in clientInfo) {
            txt += clientInfo[i] + "<br/>";
        }

        txt += "Заказ:<ul>";

        for (var i in localStorage) {
            var listElems = JSON.parse(localStorage.getItem(i));
            if (listElems != null) {
                txt += "<li>"+listElems['model'];
                txt += " - "+listElems['quantity']+" шт";
                txt += " - "+listElems['price']+" грн</li>";
            }
        }

        txt += "</ul><hr/>"+$('.totalSum').text();

        $('.info').css('visibility', 'hidden');
        $('.order-list').css('visibility', 'hidden');
        $('.submit-sum').css('visibility', 'hidden');
        $('.done').css('visibility', 'visible');
        emailjs.init("user_8DoEkLvFtuq0IWPUxSCd5");
        emailjs.send("gmail","template_wcvY3Sye",{message_html: txt});
        localStorage.clear();
    }
}
