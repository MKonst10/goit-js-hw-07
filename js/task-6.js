function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxControls = document.querySelector("#controls");
const newBoxes = document.querySelector("#boxes");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxNumber = document.querySelector("input[type=number]");
let size = 30;

const createBoxes = (amount) => {
  newBoxes.innerHTML = "";
  size = 30;
  const boxesArr = [];
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      boxesArr.push(
        `<div style="height:${size}px;width:${size}px;background-color:${getRandomHexColor()}"></div>`
      );
      size += 10;
    }
    newBoxes.insertAdjacentHTML(
      "beforeend",
      boxesArr.map((box) => box).join("")
    );
  } else {
    alert("Wrong number!");
  }
};

createButton.addEventListener("click", () => {
  createBoxes(boxNumber.value);
});

const destroyBoxes = () => (newBoxes.innerHTML = "");

destroyButton.addEventListener("click", destroyBoxes);
