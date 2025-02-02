"use strict";
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");
let isMouseDown = false;
function handleMove(e) {
    if (!isMouseDown) return;
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const playbackRate = percent * (max - min) + min;
    const height = Math.round(percent * 100) + "%";
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + "x";
    video.playbackRate = playbackRate;
}
speed.addEventListener("mousedown", function (e) {
    isMouseDown = true;
    handleMove(e);
});
speed.addEventListener("mousemove", handleMove);
speed.addEventListener("mouseup", (e) => {
    isMouseDown = false;
});
