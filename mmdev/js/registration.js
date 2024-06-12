$(document).ready(function(){
    $('#registration-form').submit(function(event){
        event.preventDefault();

        var fullname = $('.registration-input[name="fullname"]').val();
        var email = $('.registration-input[name="email"]').val();
        var phone = $('.registration-input[name="phone"]').val();

        var formData = {
            fullname: fullname,
            email: email,
            phone: phone
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/register',
            data: formData,
            dataType: 'json',
            success: function(response){
                console.log(response);
                alert('Регистрация успешна!');
            },
            error: function(xhr, status, error){
                console.error(xhr.responseText);
                alert('Ошибка регистрации: ' + xhr.responseText);
            }
        });
    });
});