"use strict";
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreenBtn = player.querySelector(".fullscreen");
// our functional
function togglePlay() {
    video.paused ? video.play() : video.pause(); // or use video[video.paused ? 'play': pause];
}
function updateBtn() {
    video.paused ? (toggle.innerText = "►") : (toggle.innerText = "⏸");
}
function skip() {
    let skipValue = parseFloat(this.dataset.skip);
    video.currentTime += skipValue;
}
function handleRangeUpdate() {
    video[this.name] = this.value; // to set up some value to property
    console.log(this.value);
}
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
function handleFullscreen() {
    player.classList.toggle("fullscreen");
}
// hook up the event listeners
let mouseDown = false;
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);
skipBtns.forEach((skipBtn) => skipBtn.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) => range.addEventListener("mousemove", handleRangeUpdate));
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
fullscreenBtn.addEventListener("click", handleFullscreen);
