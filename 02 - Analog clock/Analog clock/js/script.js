"use strict";
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const timer = () => {
    //console.log("1");
    const now = new Date();
    const rotGradSecondHand = (now.getSeconds() / 60) * 360 + 90;
    const rotGradMinutHand = (now.getMinutes() / 60) * 360 + 90;
    const rotGradHourHand = (now.getHours() / 60) * 360 + 90;
    secondHand.style.transform = ` translate(7.5%, -50%) rotate(${rotGradSecondHand}deg)`;
    minuteHand.style.transform = ` translate(7.5%, -50%) rotate(${rotGradMinutHand}deg)`;
    hourHand.style.transform = ` translate(7.5%, -50%) rotate(${rotGradHourHand}deg)`;
    console.log(rotGradSecondHand);
};
setInterval(timer, 1000);
