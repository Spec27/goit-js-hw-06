const inputNameEl = document.querySelector("#name-input");
const spanNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", onInputChenge);

function onInputChenge(event) {
  spanNameEl.textContent = event.currentTarget.value;
  if (spanNameEl.textContent === "") {
    spanNameEl.textContent = "Anonymous";
  }
}

/* Напиши скрипт который,
при наборе текста в инпуте input#name - input(событие input),
подставляет его текущее значение в span#name - output.
Если инпут пустой, в спане должна отображаться строка "Anonymous". */
