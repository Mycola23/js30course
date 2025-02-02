"use strict";
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const timerControls = document.querySelector(".timer__controls");
//for btns
timerControls.addEventListener("click", (e) => {
    if (e.target.closest(".timer__button")) {
        timer(e.target.dataset.time);
    }
});
document.customForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const min = this.minutes.value;
    timer(min * 60);
    this.reset();
});

//timer functional
let countDown;
function timer(seconds) {
    //clear existing timer
    clearInterval(countDown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}
function displayTimeLeft(seconds) {
    let secondsLeft = seconds;
    const hours = Math.floor(seconds / 3600);
    secondsLeft %= 3600;
    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft %= 60;
    const display = formatTime(hours, minutes, secondsLeft);
    timerDisplay.textContent = display;
    document.title = display;
}

function formatTime(hours, minutes, seconds) {
    let h, min, sec;
    hours > 9 ? (h = `${hours}`) : (h = `0${hours}`);
    minutes > 9 ? (min = `${minutes}`) : (min = `0${minutes}`);
    seconds > 9 ? (sec = `${seconds}`) : (sec = `0${seconds}`);
    return `${h}:${min}:${sec}`;
}
function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const min = end.getMinutes();
    const sec = end.getSeconds();
    endTime.textContent = `Be back it ${formatTime(hour, min, sec)}`;
}
