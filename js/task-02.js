const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const createEl = document.createElement('li');
  createEl.textContent = ingredient;
  return createEl
});

console.log(elements);
ulEl.append(...elements);

