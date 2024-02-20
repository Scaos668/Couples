import { totalFlips } from "./logic.js";

let totalTime;
let intervalId;

function startTimer() {
  let statMoves = document.querySelector(".state__moves");
  let statTime = document.querySelector(".state__time");

  intervalId = setInterval(() => {
    let num = statTime.textContent;
    num--;
    statTime.textContent = num;
    console.log(statTime);
    console.log(statMoves);
    if (num <= 0) {
      clearInterval(intervalId);
      document.querySelector(".non_clickable").classList.remove("can-click");
    }
  }, 1000);
}

export { totalTime, intervalId, startTimer };
