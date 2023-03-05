"use strict";

const form = document.querySelector(".login-form");
const inputs = document.querySelector(".login-form").elements;

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const elements = {
      Email: email.value,
      Password: password.value,
    };
    console.log(elements);
  }
  event.currentTarget.reset();
}
