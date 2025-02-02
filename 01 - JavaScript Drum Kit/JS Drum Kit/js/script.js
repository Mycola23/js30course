"use strict";
//*project \\\\ Drum Kit /////  completed
window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    //console.log(e.keyCode); // it`s  old code(not use in futture)
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", RemoveTransition);
});

function RemoveTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}
