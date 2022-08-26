function generatePassword(length) {
    var upper = document.getElementById('upper').checked;
    var lower = document.getElementById('lower').checked;
    var numbers = document.getElementById('numbers').checked;
    var symbols = document.getElementById('symbols').checked;
    var field = document.getElementById('password');
    var copy = document.getElementById('copy');

    if (!upper && !lower && !numbers & !symbols) {
        field.style.borderColor = '#FF5252';
        field.style.color = '#FF5252';
        copy.style.fill = '#FF5252'
        return "You must select at least one box";
    }
    else {
        field.value = "";
        field.style.borderColor = '#ccc';
        field.style.color = '#878787';
        copy.style.fill = '#878787';
    }
    charset = "";
    if (upper == true) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lower == true) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers == true) {
        charset += "0123456789";
    }
    if (symbols == true) {
        charset += "!@#$&*?";
    }
    res = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        res += charset.charAt(Math.floor(Math.random() * n));
    }
    if (upper == true) {
        if(!/[A-Z]/.test(res)){
            generatePassword(length);
        }
    }
    if (lower == true) {
        if(!/[a-z]/.test(res)){
            generatePassword(length);
        }
    }
    if (numbers == true) {
        if(!/[0-9]/.test(res)){
            generatePassword(length);
        }
    }
    if (symbols == true) {
        if(!/[!@#$&*?]/.test(res)){
            generatePassword(length);
        }
    }
    return res;
}

function displayPassword() {
    var password = document.getElementById('password');
    var length = document.getElementById('length').value;
    password.value = generatePassword(length);
}

function copyText() {
    var copyText = document.getElementById('password');
    var copy = document.getElementById('copy');
    if (copyText.value == 'You must select at least one box') {
        return;
    }
    if (copyText.value == '' || copyText.value == 'Nothing to copy...') {
        copyText.style.borderColor = '#FF5252';
        copyText.style.color = '#FF5252';
        copyText.value = 'Nothing to copy...';
        copy.style.fill = '#FF5252';
    } else {
        navigator.clipboard.writeText(copyText.value);
        copyText.style.borderColor = '#42ba96';
        copy.style.fill = '#42ba96';
        copyText.style.color = '#42ba96';

        setTimeout(() => {
            copyText.style.borderColor = '#ccc';
            copy.style.fill = '#878787';
            copyText.style.color = '#878787';
        }, 2000);
    }
}
