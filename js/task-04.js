const decreasesTheValue = document.querySelector('button[data-action="decrement"]');
const increasesTheValue = document.querySelector('button[data-action="increment"]');
const changeValue = document.querySelector("#value");

let counterValue = 0;

const increasesFn = () => {
  changeValue.textContent = counterValue -= 1;
};

const decreasesFn = () => {
  changeValue.textContent = counterValue += 1;
};

decreasesTheValue.addEventListener("click", increasesFn);
increasesTheValue.addEventListener("click", decreasesFn);

/* Счетчик состоит из спана и кнопок, которые, при клике,
    должны увеличивать и уменьшать его значение на единицу.
    Создай переменную counterValue в которой будет храниться текущее значение счетчика
 и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue. */
