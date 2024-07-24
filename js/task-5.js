function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const body = document.querySelector("body");

const onButtonClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = body.style.backgroundColor;
};

changeColorButton.addEventListener("click", onButtonClick);

console.log(getRandomHexColor());
