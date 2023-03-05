"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorOutput = document.querySelector(".color");

function handleChangeBodyBgc() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorOutput.textContent = newColor;
}

changeColorBtn.addEventListener("click", handleChangeBodyBgc);
