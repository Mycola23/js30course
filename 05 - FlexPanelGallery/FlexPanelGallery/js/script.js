"use strict";
const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
    panel.addEventListener("click", (e) => {
        panel.classList.toggle("open");
    });
    panel.addEventListener("transitionend", function (e) {
        if (e.propertyName === "flex-grow") {
            this.classList.toggle("open-active");
        }
    });
});
