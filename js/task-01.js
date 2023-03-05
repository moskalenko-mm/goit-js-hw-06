"use strict";

const listItems = document.querySelectorAll(".item");
console.log("Number of categories:", listItems.length);

listItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
