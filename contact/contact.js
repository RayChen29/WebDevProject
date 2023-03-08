let button = document.getElementsByClassName("btn")[0];
button.addEventListener("click", (event) => {
  button.style.display = "none";
});

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.querySelector(".btn");

const validateForm = () => {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (
    nameValue === "" ||
    emailValue === "" ||
    messageValue === "" ||
    emailValue.indexOf("@") === -1
  ) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
    submitButton.backgroundColor = "#FFFFFF";
  }
};

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
messageInput.addEventListener("input", validateForm);
