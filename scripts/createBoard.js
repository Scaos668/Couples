const gameBoard = document.querySelector(".board");
const form = gameBoard.querySelector(".board__form");
const startButton = form.querySelector(".board__button");
const input = form.querySelector(".board__input");

import { createCard, createIconsArray } from "./cards.js";
import { startTimer } from "./timer.js";

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  let columns = input.value;
  let count;
  if (input.value >= 2 && input.value <= 6 && input.value % 2 == 0) {
    count = input.value * input.value;
  } else {
    alert("Нужно написать четное число в указанном диапазоне.");
    return;
  }

  createBoard(count, columns);
});

function createBoard(count, columns) {
  gameBoard.querySelector(".middle_row").textContent = "";
  let setTime = document.querySelector(".setTime").value;
  if (setTime > 120) {
    setTime = 120;
  } else if (setTime < 10) {
    setTime = 10;
  }
  document.querySelector(".setTime").classList.add("dspn");
  document.querySelector(".state__time").classList.remove("dspn");
  document.querySelector(".state__time").textContent = setTime;
  startTimer();

  const template = document
    .querySelector("#gameTableTemplate")
    .cloneNode(true).content;
  const gameTable = template.querySelector(".table");
  const restartBtn = template.querySelector(".table__button");

  gameTable.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);
    `;

  gameBoard.append(gameTable);

  restartBtn.addEventListener("click", () => {
    location.reload();
  });

  gameBoard.append(restartBtn);

  let icons = createIconsArray(count);

  icons.forEach((element) => {
    gameTable.append(createCard(element));
  });
}

export { createBoard };
