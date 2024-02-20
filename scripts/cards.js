import { gameLogic } from "./logic.js";

function createIconsArray(initialCount) {
  const iarray = [
    "compass",
    "cloud",
    "play",
    "bolt",
    "stop",
    "cogs",
    "atom",
    "basketball-ball",
    "arrows",
    "angle-left",
    "bars",
    "file",
    "filter",
    "gear",
    "folder",
    "folder-open",
    "shield",
    "scissors",
    "pen-clip",
  ];
  let cards = iarray.slice(0, Math.floor(initialCount / 2));
  let duobleCards = dublicateElements(cards);
  return shuffleArray(duobleCards);
}

function dublicateElements(array) {
  let somearr = [];
  for (let i = 0; i < array.length; i++) {
    somearr.push(array[i], array[i]);
  }
  return somearr;
}

function shuffleArray(array) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    currentIndex--;
    const randomIndex = Math.floor(Math.random() * currentIndex);

    const temp = array[currentIndex];

    array[currentIndex] = array[randomIndex];

    array[randomIndex] = temp;
  }

  return array;
}

function createCard(flippedIcon) {
  const template = document
    .querySelector("#cardTemplate")
    .cloneNode(true).content;
  const card = template.querySelector(".card");

  card.querySelector("#flippedIcon").classList.add(`fa-${flippedIcon}`);
  card.addEventListener("click", () => gameLogic(card));

  return card;
}

export { createIconsArray, createCard };
