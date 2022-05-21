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