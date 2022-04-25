// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsListMaker = ingredients.map(ingredient => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.textContent = ingredient;
  ingredientsItemEl.classList.add('item');
  ingredientsListEl.append(ingredientsItemEl);
});
console.log(ingredientsListEl);
