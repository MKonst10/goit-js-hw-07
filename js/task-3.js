const inputEl = document.querySelector("#name-input");
console.log(inputEl);

const nameSpan = document.querySelector("#name-output");
console.log(nameSpan);

const onFormInput = () => {
  const name = inputEl.value.trim();
  if (name !== "") {
    nameSpan.innerHTML = name;
  } else {
    nameSpan.innerHTML = "Anonymous";
  }
};
inputEl.addEventListener("input", onFormInput);
