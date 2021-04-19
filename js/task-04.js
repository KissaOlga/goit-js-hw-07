const counterPlus = document.querySelector("[data-action=increment]");
const counterMinus = document.querySelector("[data-action=decrement]");
let counterSpan = document.querySelector("#value");
const increment = () => {
    ++counterSpan.textContent;
};
const decrement = () => {
    if (counterSpan.textContent > 0)
        --counterSpan.textContent;
};
counterPlus.addEventListener("click", increment);
counterMinus.addEventListener("click", decrement);

