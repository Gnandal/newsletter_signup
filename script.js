const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
const section = document.querySelector("section");
const successMessageComponent = document.getElementById("success_message");
const emailInput = document.getElementById('email');
const emailError = document.querySelector(".email-error");

const submitEmailForm = (e) => {
  const email = emailInput.value;

  if (isEmailValid(email)) {
    hideSection();
    showSuccessMessage();
  }
  else {
    notifyForInvalidEmail();
  }
}

const notifyForInvalidEmail = () => {
  emailError.innerHTML = "Valid email required";
  emailInput.classList.add("error");
}

const dismissSuccessMessage = () => {
  showSection();
  hideSuccessMessage();
  emailInput.value = '';
}

const hideSection = () => {
  section.style.display = "none";
}

const showSection = () => {
  section.style.display = "flex";
}

const showSuccessMessage = () => {
  successMessageComponent.style.display = "block";
}

const hideSuccessMessage = () => {
  successMessageComponent.style.display = "none";
}

const isEmailValid = (email) => {
  return emailRegex.test(email);
}