function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const currentColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeColor);
function changeColor() {
  const randomColor = (bodyEl.style.backgroundColor = `${getRandomHexColor()}`);
  currentColor.textContent = randomColor;
}

/* Напиши скрипт,
  который изменяет цвета фона элемента < body >
  через инлайн стиль при клике на button.change - color 
  и выводит значение цвета в span.color.
Для генерации случайного цвета используй функцию getRandomHexColor. */
