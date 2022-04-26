// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  
function onClickBtn() {

  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanEl.textContent = color;
}

buttonEl.addEventListener("click", onClickBtn);


