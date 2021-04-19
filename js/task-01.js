const listRef = document.querySelectorAll('#categories li.item');
console.log(`В списке ${listRef.length} категории`);
 
const amountRef = listRef.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}, Количество элементов: ${el.lastElementChild.children.length}`);
});

/* for (let i = 0; i <= listRef.length; i++) {
        console.log(`Category: ${listRef[i].firstElementChild.textContent} Amount of items: ${listRef[i].lastElementChild.children.length}`);
};  */