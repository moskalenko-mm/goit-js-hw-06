"use strict";

let counterValue = 0;
const counter = document.querySelector("#counter");
const value = document.querySelector("#value");
const increment = counter.lastElementChild;
const decrement = counter.firstElementChild;

increment.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

decrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
