"use strict";
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed");
navigator.geolocation.watchPosition(
    (data) => {
        console.log(data);
        speed.textContent = data.coords.speed || 0;
        arrow.style.transform = `rotate(${data.coords.heading}deg)`;
        // console.log(data.coords.heading);
    },
    (err) => {
        console.error(err);
        alert("HEy YOU GOTTA ALLOW THAT TO HAPPEN");
    }
);
