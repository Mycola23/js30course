"use strict";
const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");

document.body.append(highlight);
function highlightLink() {
    highlight.classList.add("highlight");
    const linkCoords = this.getBoundingClientRect();
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left,
    };
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
}
triggers.forEach((trigger) => {
    trigger.addEventListener("mouseenter", highlightLink);
});
