document.getElementById('submit-button').addEventListener('click', function () {
    performLogin();
});

function performLogin() {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    if (emailField.value.length > 0 && passwordField.value.length > 0) {
        window.location.href = 'account.html';
    }
    else {
        window.location.href = 'error.html';
    }
}