// Login page

const submitButton = document.getElementById('submit-button');

if (submitButton != null) {
    submitButton.addEventListener('click', function () {
        performLogin();
    });
}

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

// Account page

const depositButton = document.getElementById('deposit-button');
if (depositButton != null) {
    depositButton.addEventListener('click', function () {
        const depositDisplay = document.getElementById('deposit-display');
        const previousDeposit = parseFloat(depositDisplay.innerText);

        const balanceDisplay = document.getElementById('balance-display');
        const previousBalance = parseFloat(balanceDisplay.innerText);

        const depositInput = document.getElementById('deposit-input');
        const currentDeposit = parseFloat(depositInput.value);

        if (!isNaN(currentDeposit)) {
            depositDisplay.innerText = previousDeposit + currentDeposit;
            balanceDisplay.innerText = previousBalance + currentDeposit;
            depositInput.value = '';
        }
    });
}

const withdrawButton = document.getElementById('withdraw-button');
if (withdrawButton != null) {
    withdrawButton.addEventListener('click', function () {
        const withdrawDisplay = document.getElementById('withdraw-display');
        const previousWithdraw = parseFloat(withdrawDisplay.innerText);

        const balanceDisplay = document.getElementById('balance-display');
        const previousBalance = parseFloat(balanceDisplay.innerText);

        const withdrawInput = document.getElementById('withdraw-input');
        const currentWithdraw = parseFloat(withdrawInput.value);

        if ((!isNaN(currentWithdraw)) && (previousBalance >= currentWithdraw)) {
            withdrawDisplay.innerText = previousWithdraw + currentWithdraw;
            balanceDisplay.innerText = previousBalance - currentWithdraw;
            withdrawInput.value = '';
        }
    });
}