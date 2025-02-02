"use strict";
import { cornify_add } from "./cornify.js";
const pressed = [];
const secretCode = "froggo";

window.addEventListener("keyup", (e) => {
    pressed.push(e.key);
    console.log(pressed.length - secretCode.length);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log(pressed);
    if (pressed.join("").includes(secretCode)) {
        cornify_add();
        console.log("Froggo is your friend forever forever forever");
    }
});
