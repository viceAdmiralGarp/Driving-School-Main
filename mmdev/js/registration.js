$(document).ready(function(){
    $('#registration-form').submit(function(event){
        event.preventDefault();

        var formData = {
            fullname: $('#fullname').val(),
            email: $('#email').val(),
            phone: $('#phone').val()
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/register',
            data: formData,
            contentType: 'application/json',
            success: function(response){
                console.log(response);
                alert('Registration successful!');
            },
            error: function(xhr, status, error){
                console.error(xhr.responseText);
                alert('Error registering: ' + xhr.responseText);
            }
        });
    });
});