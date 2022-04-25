// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

function changeFontSize() {
  spanEl.style.fontSize = inputEl.value + "px";
  // console.log(spanEl.style.fontSize);
}

inputEl.addEventListener("input", changeFontSize);
