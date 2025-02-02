"use strict";
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const btnStartGame = document.querySelector(".btn__start-game");
let lastHole;
let timeUp = false;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (lastHole === hole) {
        return randomHole(holes);
    }

    lastHole = hole;
    return hole;
}
function peep() {
    const time = randomTime(235, 950);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
        if (!timeUp) {
            peep();
        }
        hole.classList.remove("up");
    }, time);
}
function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    setTimeout(() => {
        timeUp = true;
    }, 10 * 1000);
    peep();
}
moles.forEach((mole) => {
    mole.addEventListener("click", function (e) {
        if (e.isTrusted && e.target.closest(".mole")) {
            scoreBoard.textContent++;
            this.parentElement.classList.remove("up");
        }
    });
});
btnStartGame.addEventListener("click", (e) => {
    startGame();
});
