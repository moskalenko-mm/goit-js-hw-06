"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

const items = ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = `${item}`;

  return listItem;
});

ul.append(...items);
