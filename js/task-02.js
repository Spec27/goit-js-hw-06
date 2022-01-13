const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listIngredients = document.querySelector("#ingredients");
const elementEl = ingredients.map((arr) => {
  const newIngredientEl = document.createElement("li");
  newIngredientEl.classList.add("item");
  newIngredientEl.textContent = `${arr}`;
  return newIngredientEl;
});
console.log(elementEl);
listIngredients.append(...elementEl);

/* Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients. */
