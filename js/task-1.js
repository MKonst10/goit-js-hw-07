const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);

listItem.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const listEl = item.querySelectorAll("ul li");
  console.log(`Elements: ${listEl.length}`);
});
