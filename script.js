import { createBoard } from "./scripts/createBoard.js";

// const gameBoard = document.querySelector(".board");
// const form = gameBoard.querySelector(".board__form");
// const startButton = form.querySelector(".board__button");
// const input = form.querySelector(".board__input");

// let totalTime;
// let totalFlips;
// let intervalld;

// let couple = {
//   first: null,
//   firstClickable: true,
//   second: null,
//   secondClickable: true,
// };

// startButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   let columns = input.value;
//   let count;
//   if (input.value >= 2 && input.value <= 6 && input.value % 2 == 0) {
//     count = input.value * input.value;
//   } else {
//     alert("Нужно написать четное число в указанном диапазоне.");
//     return;
//   }

//   createBoard(count, columns);
// });

// function createBoard(count, columns) {
//   gameBoard.textContent = "";
//   startTimer();

//   const template = document
//     .querySelector("#gameTableTemplate")
//     .cloneNode(true).content;
//   const gameTable = template.querySelector(".table");
//   const restartBtn = template.querySelector(".table__button");

//   gameTable.style = `
//   grid-template-columns: repeat(${columns}, 1fr);
//   grid-template-rows: repeat(${columns}, 1fr);
//   `;

//   gameBoard.append(gameTable);

//   restartBtn.addEventListener("click", () => {
//     location.reload();
//   });

//   gameBoard.append(restartBtn);

//   let icons = createIconsArray(count);

//   icons.forEach((element) => {
//     gameTable.append(createCard(element));
//   });
// }

// function createIconsArray(initialCount) {
//   const iarray = [
//     "compass",
//     "cloud",
//     "play",
//     "bolt",
//     "stop",
//     "cogs",
//     "atom",
//     "basketball-ball",
//     "arrows",
//     "angle-left",
//     "bars",
//     "file",
//     "filter",
//     "gear",
//     "folder",
//     "folder-open",
//     "shield",
//     "scissors",
//     "pen-clip",
//   ];
//   let cards = iarray.slice(0, Math.floor(initialCount / 2));
//   let duobleCards = dublicateElements(cards);
//   return shuffleArray(duobleCards);
// }

// function dublicateElements(array) {
//   let somearr = [];
//   for (let i = 0; i < array.length; i++) {
//     somearr.push(array[i], array[i]);
//   }
//   return somearr;
// }

// function shuffleArray(array) {
//   let currentIndex = array.length;

//   while (currentIndex !== 0) {
//     currentIndex--;
//     const randomIndex = Math.floor(Math.random() * currentIndex);

//     const temp = array[currentIndex];

//     array[currentIndex] = array[randomIndex];

//     array[randomIndex] = temp;
//   }

//   return array;
// }

// function createCard(flippedIcon) {
//   const template = document
//     .querySelector("#cardTemplate")
//     .cloneNode(true).content;
//   const card = template.querySelector(".card");

//   card.querySelector("#flippedIcon").classList.add(`fa-${flippedIcon}`);
//   card.addEventListener("click", () => gameLogic(card));

//   return card;
// }

// function startTimer() {
//   let statMoves = document.querySelector(".state__moves");
//   let statTime = document.querySelector(".state__time");

//   intervalId = setInterval(() => {
//     statTime.textContent--;
//     console.log(statTime);
//     console.log(statMoves);
//     if (statTime <= 0) {
//       clearInterval(intervalId);
//       couple.firstClickable = false;
//       couple.secondClickable = false;
//     }
//   }, 1000);
// }

// function gameLogic(card) {
//   // Если обе карточки не кликабельны, ничего не делаем
//   if (!couple.firstClickable && !couple.secondClickable) return;

//   // Переворачиваем карточку
//   card.classList.add("flip");
//   totalFlips += 1;

//   // Проверяем, кликнута ли первая карточка
//   if (couple.first === null) {
//     // Если нет, то сохраняем на нее ссылку и считаем кликнутой
//     couple.first = card;
//     couple.firstClickable = false;
//   } else if (couple.second === null && couple.first !== card) {
//     // Если да, то проверяем, кликнута ли вторая карточка и не является ли вторая карточка той же самой карточкой, что и первая, и если нет, то сохраняем ссылку на эту карточку и считаем ее кликнутой
//     couple.second = card;
//     couple.secondClickable = false;
//   }

//   // Если какой-либо карточки не кликнуто, ничего не делаем
//   if (couple.first === null || couple.second === null) return;

//   // Сравниваем классы двух карточек и сохраняем логический результат в переменную (это для повышения читабельности)
//   const isEqual =
//     couple.first.firstElementChild.classList[2] ===
//     couple.second.firstElementChild.classList[2];

//   // Если классы одинаковы
//   if (isEqual) {
//     setTimeout(() => {
//       // То перекрашиваем их в зеленый с задержкой в 1 секунду
//       couple.first.classList.add("successfully");
//       couple.second.classList.add("successfully");

//       // Сбрасываем все ссылки и состояния
//       refresh();
//     }, 1000);
//   } else {
//     setTimeout(() => {
//       // Иначе переворачиваем карточки обратно с задержкой в 1 секунду
//       couple.first.classList.remove("flip");
//       couple.second.classList.remove("flip");

//       // Сбрасываем все ссылки и состояния
//       refresh();
//     }, 1000);
//   }

//   // Функция сброса ссылок и состояний
//   function refresh() {
//     couple.first = null;
//     couple.second = null;
//     couple.firstClickable = true;
//     couple.secondClickable = true;
//     isWin();
//   }
// }

// function isWin() {
//   const gameTable = document.querySelector(".table");
//   if (
//     Array.from(gameTable.children).every((card) =>
//       card.classList.contains("flip")
//     )
//   ) {
//     setTimeout(() => {
//       alert("Ура победа!!! Урааааа!!!");
//       clearInterval(intervalId);
//     }, 2500);
//   }
// }
