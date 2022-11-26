// Validate input field
const form = document.querySelector("form");

const fieldFirst = document.querySelector(".firstname-label");
const firstname = document.querySelector("#firstname");

const fieldLast = document.querySelector(".lastname-label");
const lastname = document.querySelector("#lastname");

const fieldEmail = document.querySelector(".email-label");
const email = document.querySelector("#email");

const fieldPassword = document.querySelector(".password-label");
const password = document.querySelector("#password");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear existing error
  clearExistingError();

  validateInput(firstname, fieldFirst);
  validateInput(lastname, fieldLast);
  validateInput(email, fieldEmail);
  validateInput(password, fieldPassword);
});

firstname.addEventListener("keydown", (event) => {
  clearError(event);
});

lastname.addEventListener("keydown", (event) => {
  clearError(event);
});

email.addEventListener("keydown", (event) => {
  clearError(event);
});

password.addEventListener("keydown", (event) => {
  clearError(event);
});

function validateInput(input, field) {
  const value = input.value;
  const errorText = document.createElement("span");
  errorText.setAttribute("class", "error");
  if (value.length === 0) {
    input.nextElementSibling.style.display = "block";
    input.style.border = "2px solid red";

    errorText.textContent = `${input.placeholder} cannot be empty`;
  }

  if (input.type === "email" && !/(.+)@(.+){2,}\.(.+){2,}/.test(value)) {
    errorText.textContent = "Looks like this is not an email";
  }

  field.appendChild(errorText);
  input.focus();
}

function clearError(event) {
  const span = event.target.parentNode.nextElementSibling;

  if (span === null) return;
  event.target.removeAttribute("style");
  event.target.nextElementSibling.style.display = "none";
  if (span.parentNode) {
    span.parentNode.removeChild(span);
  }
}

function clearExistingError() {
  const spans = document.querySelectorAll(".error");

  for (const span of spans) {
    span.parentNode.removeChild(span);
  }
}
