document.getElementById("login-submit").addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'sharif@gmail.com' && userPassword == 'Apple'){
        window.location.href="banking.html"
    }
    else{
        const error = document.getElementById('error-login');
        error.style.display = 'block';
    }
})