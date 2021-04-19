
// эта задача не получилась, хорошо, что необязательная.

const inputDivRef = document.querySelector('#controls');
const boxesContainerRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');

function createBoxes(event) {
    for (let i = 1; i <= this.value; i += 1) {
        const divCreate = document.createElement('div');
        divCreate.style.width = '30px';
        divCreate.style.height = '30px';
        divCreate.style.backgroundColor = 'rgb(200, 200, 200)';
    
        boxesContainerRef.appendChild(divCreate);
    }
};
inputRef.addEventListener('input', createBoxes);

function destroyBoxes() {
  boxesContainerRef.remove();
};

//btnRenderRef.addEventListener('click', e=>createBoxes(inputRef.value));
//btnRenderRef.addEventListener('click', e=>destroyBoxes());