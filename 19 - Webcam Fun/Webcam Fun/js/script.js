"use strict";

const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const takePhotoBtn = document.querySelector(".controls__take-photo-btn");
const filtersBlock = document.querySelector(".controls__filters");

let currentFilter = "default"; // Track the current filter

function getVideo() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((localMediaStream) => {
                video.srcObject = localMediaStream;
                video.play();
            })
            .catch((error) => console.error(error));
    }
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    function applyFilter(pixels) {
        switch (currentFilter) {
            case "red":
                return redEffect(pixels);
            case "green":
                return greenEffect(pixels);
            case "rainbow":
                return rainbowEffect(pixels);
            default:
                return pixels; // No filter
        }
    }

    function drawFrame() {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height, { willReadFrequently: true });
        pixels = applyFilter(pixels);
        ctx.putImageData(pixels, 0, 0);
        requestAnimationFrame(drawFrame);
    }

    drawFrame(); // Start rendering
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();
    const data = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "handsome");
    link.innerHTML = `<img src='${data}' alt='handsome person img' />`;
    strip.insertBefore(link, strip.firstChild);
}

function chooseFilter(e) {
    const filterElement = e.target.closest('input[type="radio"]');
    if (filterElement) {
        currentFilter = filterElement.dataset.name || "default";
        console.log(`Filter changed to: ${currentFilter}`);
    }
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] += 100; // Red channel
        pixels.data[i + 1] -= 50; // Green channel
        pixels.data[i + 2] *= 0.5; // Blue channel
    }
    return pixels;
}
function greenEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] *= 0.5; // Red channel
        pixels.data[i + 1] += 100; // Green channel
        pixels.data[i + 2] -= 50; // Blue channel
    }
    return pixels;
}
function rainbowEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 250] += pixels.data[i + 0]; // Red channel
        pixels.data[i + 100] += pixels.data[i + 1]; // Green channel
        pixels.data[i - 250] += pixels.data[i + 2]; // Blue channel
    }
    return pixels;
}

getVideo();
video.addEventListener("canplay", paintToCanvas);
filtersBlock.addEventListener("click", chooseFilter);
takePhotoBtn.addEventListener("click", takePhoto);

//todo add select btn for different filters ,add possibility to add own filters
