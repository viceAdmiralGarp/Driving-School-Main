$(document).ready(function(){
    $('#registration-form').submit(function(event){
        event.preventDefault();

        var fullname = $('.registration-input[name="fullname"]').val();
        var email = $('.registration-input[name="email"]').val();
        var phone = $('.registration-input[name="phone"]').val();

        var formData = {
            fullName: fullname,
            email: email,
            phoneNumber: phone
        };
        console.log(formData)

        $.ajax({
            method: 'POST',
            url: 'https://grand-school-d7e43eab69dc.herokuapp.com/register',
            data: JSON.stringify(formData),
            contentType: 'application/json',
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