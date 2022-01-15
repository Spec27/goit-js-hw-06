const fontSizeControlEl = document.querySelector("#font-size-control");
const changesTheTextSizeEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", (event) => {
  changesTheTextSizeEl.style.fontSize = `${event.currentTarget.value}px`;
});

/* Напиши скрипт, который реагирует на изменение значения input#font - size - control
    (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
    В результате при перетаскивании ползунка будет меняться размер текста.
 */
