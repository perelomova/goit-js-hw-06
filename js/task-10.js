// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

const inputEl = document.querySelector('input');
const divBoxes = document.querySelector("#boxes");
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

//Set random color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16) .padStart(6, 0)}`;
}

//Read input value
function readInput() {
  if (inputEl.value >= 1 && inputEl.value <= 100) {
    return inputEl.value;
  } else {
    alert("Please enter number from 1 to 100");
  }
}

//Create single div
function createDiv(increaseNumber) {
  const newDiv = document.createElement('div');

  let boxSize = 30 + increaseNumber;
  newDiv.style.width = `${boxSize}px`;
  newDiv.style.height = `${boxSize}px`;
  newDiv.style.backgroundColor = getRandomHexColor();

  return newDiv;
}

// Create divs collection
function createBoxes(amount) {
  divBoxes.innerHTML = "";
  const myDivs = [];

  for (let i = 0; i < amount; i += 1) {
    myDivs.push(createDiv(10 * i));
    divBoxes.appendChild(myDivs[i]);
  }
}

btnCreate.addEventListener("click", function () { createBoxes(readInput()) });

// Clear boxes content and input field
function destroyHandleClick() {
  divBoxes.innerHTML = "";
  inputEl.value = "";
}

btnDestroy.addEventListener("click", destroyHandleClick);


//-----Alternative way to create divs collection-------

// function createBoxes(amount) {
//   divBoxes.innerHTML = "";
//   const myDivs = [];
//   let boxSize = 30;

//   for (let i = 0; i < amount; i += 1) {
//     const newDiv = document.createElement('div');
//     newDiv.style.border = '1px solid teal';
//     newDiv.style.width = `${boxSize}px`;
//     newDiv.style.height = `${boxSize}px`;
//     newDiv.style.backgroundColor = getRandomHexColor();
//     myDivs.push(newDiv);
//     divBoxes.appendChild(myDivs[i]);

//     boxSize += 10;
//   }
// }
