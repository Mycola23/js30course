"use strict";
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
    let transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
    p.textContent = transcript;
    if (e.results[0].isFinal) {
        p = document.createElement("p");
        words.appendChild(p);
    }
});
//^на основі цієї штуки можна створити джарвіса,або додати в мій нотатник функцію запису нотаток  задопомогою голосу
recognition.addEventListener("end", recognition.start);
recognition.start();
