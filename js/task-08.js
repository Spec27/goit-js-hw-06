/* 
Напиши скрипт управления формой логина.
Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму,
собери значения полей в обьект, где имя поля будет именем свойства,
а значение поля - значением свойства.
Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти 
значения полей формы методом reset. 
*/

const formEl = document.querySelector(".login-form");
const btnEl = document.querySelector(".submit");

formEl.addEventListener("submit", oneFormSubmit);

function oneFormSubmit(event) {
  event.preventDefault();

  const formeElements = event.currentTarget.elements;
  const email = formeElements.email.value;
  const password = formeElements.password.value;

  if (formeElements.email.value === "" || formeElements.password.value === "") {
    alert("Please fill in all the fields!");
  }
  if (formeElements.email.value !== "" || formeElements.password.value !== "") {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
