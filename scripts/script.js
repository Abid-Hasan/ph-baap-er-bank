// Login page

const submitButton = document.getElementById('submit-button');
if (submitButton != null) {
    submitButton.addEventListener('click', function () {
        const emailField = document.getElementById('email');
        const passwordField = document.getElementById('password');

        if (emailField.value.length > 0 && passwordField.value.length > 0) {
            window.location.href = 'account.html';
        }
        else {
            window.location.href = 'error.html';
        }
    });
}

// Account page

function getDisplay(displayType) {
    return document.getElementById(displayType + '-display');
}

function getDisplayNumber(display) {
    return parseFloat(display.innerText);
}

function getInput(inputType) {
    return document.getElementById(inputType + '-input');
}

function getInputNumber(input) {
    return parseFloat(input.value);
}

function updateDisplay(display, amount) {
    display.innerText = amount;
}

function clearInput(input) {
    input.value = '';
}

function performBankingTask(task) {
    const display = getDisplay(task);
    const displayNumber = getDisplayNumber(display);
    const balance = getDisplay('balance');
    const balanceNumber = getDisplayNumber(balance);
    const input = getInput(task);
    const inputNumber = getInputNumber(input);

    if (inputNumber > 0) {
        if (task == 'deposit') {
            updateDisplay(display, displayNumber + inputNumber);
            updateDisplay(balance, balanceNumber + inputNumber);
        }
        else if (task == 'withdraw' && inputNumber <= balanceNumber) {
            updateDisplay(display, displayNumber + inputNumber);
            updateDisplay(balance, balanceNumber - inputNumber);
        }
    }

    clearInput(input);
}

const depositButton = document.getElementById('deposit-button');
if (depositButton != null) {
    depositButton.addEventListener('click', function () {
        performBankingTask('deposit');
    });
}

const withdrawButton = document.getElementById('withdraw-button');
if (withdrawButton != null) {
    withdrawButton.addEventListener('click', function () {
        performBankingTask('withdraw');
    });
}