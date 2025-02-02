"use strict";
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
} //function to less count of calls function checkSlides to make better perfomance
const sliderImgs = document.querySelectorAll(".slide-in");
function checkSlides(e) {
    sliderImgs.forEach((slideImg) => {
        const slideInAt = window.scrollY + window.innerHeight - slideImg.height / 3;
        slideImg;
        const imgBottom = slideImg.offsetTop;
        const isThirdShown = slideInAt > imgBottom;
        const isNotScrolledPast = window.scrollY < imgBottom;
        if (isThirdShown && isNotScrolledPast) {
            slideImg.classList.add("active");
        }
    });
}
window.addEventListener("scroll", debounce(checkSlides));
