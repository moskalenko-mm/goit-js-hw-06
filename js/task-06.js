"use strict";

const input = document.querySelector("#validation-input");
const validatorLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", (event) => {
  const inputLength = event.currentTarget.value.length;
  if (inputLength === validatorLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
