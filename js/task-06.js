const focusOnInput = document.querySelector("#validation-input");
const minimumNumberOfCharacters = Number(focusOnInput.dataset.length);

const checed = (event) => {
  event.preventDefault();
  if (event.currentTarget.value.length === minimumNumberOfCharacters) {
    focusOnInput.classList.add("valid");
    focusOnInput.classList.remove("invalid");
  }
  if (event.currentTarget.value.length !== minimumNumberOfCharacters) {
    focusOnInput.classList.add("invalid");
    focusOnInput.classList.remove("valid");
  }
};

focusOnInput.addEventListener("blur", checed);

/* Напиши скрипт, который при потере фокуса на инпуте(событие blur),
проверяет его содержимое на правильное количество введённых символов.
 Сколько символов должно быть в инпуте,
 указывается в его атрибуте data - length.
Если введено подходящее количество символов,
то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS - классы valid и invalid,
которые мы уже добавили в исходные файлы задания. */
