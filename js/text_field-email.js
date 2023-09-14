const inputEmail = document.querySelector(".text_field__email");
const labelEmail = document.querySelector(".label-email");
const labelError = document.querySelector(".label-error");

const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const onInput = () => {
    if (!isEmailValid(inputEmail.value) && inputEmail.value != "") {
        labelError.style.display = "block";
        labelEmail.style.color = "#e80f3b";
        inputEmail.style.borderColor = "#e80f3b";
    } else {
        labelError.style.display = "none";
        labelEmail.style.color = "#7d7d7d";
        inputEmail.style.borderColor = "#3e29e3";
    }
};

function isEmailValid(value) {
    return reg.test(value);
}

inputEmail.addEventListener("blur", onInput);
