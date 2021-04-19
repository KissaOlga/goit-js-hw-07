const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => 
(output.textContent = input.value.length > 0 ? input.value : "незнакомец")
);

/*function onInputChange(event.currentTarget.value) {
    if (event.length !== 0) {
        output.textContent - event.currentTarget.value;
    } else {
        output.textContent = "незнакомец";
    }
} */