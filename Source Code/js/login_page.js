var btn = document.getElementById("fin-btn");

btn.addEventListener("click", function() {
    var emailInput = document.querySelector('input[type="email"]');
    var email = emailInput.value.trim();
    if (email.endsWith("@student.tce.edu")) {
        window.location.href = "home.html";
    } else {
        alert("Please enter a valid email ending with @student.tce.edu");
        event.preventDefault();
    }
});

var bt1 = document.getElementById("t-sign");

bt1.addEventListener("click", function() {
    window.location.href = "signup.html"; 
});


$(document).ready(function(){
    $("#pass").on('blur',function(){
        var pw=$(this).val();
        if(pw!=='UserOfUser')
        {
            $('#res').text('Incorrect password')
        }
    });
    $("#fin-btn").submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "dummy-login-endpoint", 
            data: formData,
            dataType: "json",
            success: function(response) {
                if (response.success) {
                    
                    window.location.href = "home.html";
                } else {
                    
                    $("#error").text(response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
})