// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.childElementCount}`);

const itemsEl = document.querySelectorAll('.item');

const elements = itemsEl.forEach((element) => {
  const headerEl = element.querySelector('h2');
  console.log(`Category: ${headerEl.textContent}`);
  
  const categoryList = element.querySelector('ul');
  console.log(`Elements: ${categoryList.childElementCount}`)
  
});




 


