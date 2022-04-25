// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

//---------- First solution -------------

const decrementClick = () => {
  counterValue -= 1;
  document.getElementById("value").innerHTML = counterValue;

  console.log(`Decrement button was clicked`);
}
const incrementClick = () => {
  counterValue += 1;
  document.getElementById("value").innerHTML = counterValue;

  console.log(`Increment button was clicked`);
}

incrementBtn.addEventListener("click", incrementClick);
decrementBtn.addEventListener("click", decrementClick);

//---------- Alternative solution ------------

// incrementBtn.addEventListener("click", function () { changeOnClick("increment") });
// decrementBtn.addEventListener("click", function () { changeOnClick("decrement") });

// function changeOnClick(action) {
//   action == "increment" ? counterValue += 1 : counterValue -= 1;

//   document.getElementById("value").innerHTML = counterValue;
// }


