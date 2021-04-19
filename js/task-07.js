const rangeRaf = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
    
rangeRaf.addEventListener("input", handleInputRange);

function handleInputRange(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
    }