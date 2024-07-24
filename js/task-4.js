const loginForm = document.querySelector(".login-form");
console.log(loginForm);

const onFormSubmit = (event) => {
  event.preventDefault();
  const formValues = {
    email: loginForm.elements.email.value.trim(),
    password: loginForm.elements.password.value.trim(),
  };
  if (
    loginForm.elements.email.value === "" ||
    loginForm.elements.password.value === ""
  ) {
    alert("All form fields must be filled in");
  }
  console.log(formValues);

  loginForm.reset();
};

loginForm.addEventListener("submit", onFormSubmit);
