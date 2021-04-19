const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", inputFocusChange);

function inputFocusChange() {
    if (validationInput.value.length != validationInput.dataset.length) {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
    } if (validationInput.value.length == validationInput.dataset.length) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } if (validationInput.value.length == 0) {
        validationInput.classList.remove("invalid");
    }
}
    
