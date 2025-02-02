"use strict";
const inputs = document.querySelectorAll(".controls input");
const img = document.querySelector("img");
inputs.forEach((input) => {
    input.addEventListener("change", changePhoto);
    input.addEventListener("mousemove", changePhoto);
});
function changePhoto() {
    if (this.className === "url") {
        img.src = `${this.value}`;
    }
    const suffix = this.dataset.sizing || "";
    const name = this.name;
    document.documentElement.style.setProperty(`--${name}`, this.value + suffix);
    //console.log(this.className);
}
