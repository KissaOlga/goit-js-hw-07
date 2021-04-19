const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = ingredients.map(ingredient => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = ingredient;
  return listItemRef;
});

document.querySelector('#ingredients').append(...ingredientsList);

/*const createIngredientsEl = ingredients => {
    return ingredients.map(ingredient =>
        liEl.createElement('li')).textContent = `${ingredients}`;
};
const ingredientsRef = document.querySelector('#ingredients');   
ingredientsRef.append(...createIngredientsEl); */


