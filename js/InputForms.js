// Name Validation.
let name = document.querySelector("#Name");
let nameError = document.querySelector(".Name-error");
name.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
    if (nameRegex.test(name.value))
        nameError.textContent = "";
    else
        nameError.textContent = "Name is Incorrect";
});

// Email Validation.
let email = document.querySelector("#email");
let emailError = document.querySelector(".Email-error");
email.addEventListener('input', function () {
    let emailRegex = RegExp('^[a-z0-9]+([-+_.][a-z0-9]+)?[@][a-z0-9]+[.][a-z0-9]{2,3}([.][a-z]{2})?$');
    if (emailRegex.test(email.value))
        emailError.textContent = "";
    else
        emailError.textContent = "Email is Invalid";
});

// Mobile Validation.
let mobile = document.querySelector("#tel");
let mobileError = document.querySelector(".phone-error");
mobile.addEventListener('input', function () {
    let mobileRegex = RegExp("^[0-9]{2}\\s][0-9]{10}$");
    if (mobileRegex.test(mobile.value))
        mobileError.textContent = "";
    else
        mobileError.textContent = "Phone.No is Invalid";
});