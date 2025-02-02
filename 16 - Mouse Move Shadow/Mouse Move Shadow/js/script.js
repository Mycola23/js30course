"use strict";
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const catchBlock = document.querySelector(".catch");
const catchBtn = catchBlock.querySelector(".catch__btn");

const walk = 15;
const walkForCatchBtn = 5;
function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }
    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${-xWalk}px ${yWalk}px 0 rgba(0,0,255,0.7),
    ${xWalk}px ${-yWalk}px 0 rgba(0,255,255,0.7),
    ${-xWalk}px ${-yWalk}px 0 rgba(255,255,0,0.7)
    `;
}
/// just not work code at that moment , maybe just add some value to transform when Mousex to catch btn <100(our walk) possible
function escapebtn(e) {
    const { offsetWidth: width, offsetHeight: height } = catchBtn;
    const { offsetLeft: x, offsetTop: y } = catchBtn;

    let { offsetX: MouseX, offsetY: MouseY } = e;
    const horisantalDistanceFrom = distanceFrom(x, MouseX, width);
    const verticalDistanceFrom = distanceFrom(y, MouseY, height);

    const horizontOffset = width / 2 + walkForCatchBtn;
    const verticOffset = height / 2 + walkForCatchBtn;
    if (this !== e.target) {
        MouseX += e.target.offsetLeft;
        MouseY += e.target.offsetTop;
    }
    if (Math.abs(horisantalDistanceFrom) <= horizontOffset || Math.abs(verticalDistanceFrom) <= verticOffset) {
        setBtnPosition(Math.round(x + (horizontOffset / horisantalDistanceFrom) * 10), Math.round(y + (verticOffset / verticalDistanceFrom) * 10));
    }

    //const xWalk = Math.round((width / x) * walkForCatchBtn - walkForCatchBtn / 2);
    // const yWalk = Math.round((height / y) * walkForCatchBtn - walkForCatchBtn / 2);
    // catchBtn.style.transform = `translate(${-xWalk}px ,${-yWalk}px)`;
}
function distanceFrom(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2;
}
function setBtnPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect();
    const btnBox = catchBtn.getBoundingClientRect();

    if (distanceFrom(left, windowBox.left, btnBox.width) < 0) {
        left = windowBox.right - btnBox.width - walkForCatchBtn;
    }
    if (distanceFrom(left, windowBox.left, btnBox.width) < 0) {
        left = windowBox.left - walkForCatchBtn;
    }
    catchBtn.style.left = `${left}px`;
    catchBtn.style.top = `${top}px`;
    //console.log(x, y);
}
hero.addEventListener("mousemove", shadow);
catchBlock.addEventListener("mousemove", escapebtn);
//todo a little thoughts about right func to calc amount of px to escape
