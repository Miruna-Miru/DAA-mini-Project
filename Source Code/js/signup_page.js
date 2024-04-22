$(document).ready(function() {
    $("#fin-btn").click(function(event) {
        event.preventDefault(); // Prevent default form submission
        var usrInput =$('#urn');
        var usrn= usrInput.val().trim();
        var emailInput = $('#ema');
        var email = emailInput.val().trim();
        var password = $("#pwd").val();

        if (!email.endsWith("@student.tce.edu")) {
            alert("Please enter a valid email ending with @student.tce.edu");
            return;
        }

        if(usrn.length<=4){
            alert("Short Username . Username must atleast of 6 charactes");
        }
        // Password validation
        var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!regex.test(password)) {
            alert("Password must contain at least one alphabet, one number, one symbol, and be at least 8 characters long.");
            return;
        }

        window.location.href = "home.html";
    });
});