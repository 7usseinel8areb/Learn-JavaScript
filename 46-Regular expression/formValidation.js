document.getElementById("register").onsubmit = function () {
    let phoneInput = document.getElementById("phone").value;

    let phoneRegEx = /\(\d{4}\)\s\d{3}-\d{4}/; //(12345) 567-8910

    let validationRes = phoneRegEx.test(phoneInput);

    if (validationRes) {
        return true;
    }
    return false;
}