const canvas = document.querySelector(".draw");
const ctx = canvas.getContext("2d");
const clearAllBtn = document.querySelector(".menu__btn.clear");
console.log(clearAllBtn);

canvas.width = (80 * window.innerWidth) / 100;
canvas.height = (80 * window.innerHeight) / 100;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 65;
let isDraw = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidth = 1;
let direction = true;
function draw(e) {
    if (!isDraw) return;
    //console.log(isDraw);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]; // useful hack for me
    hue++;
    if (hue > 360) hue = 0;
    if (ctx.lineWidth >= 135 || ctx.lineWidth <= 10) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
    isDraw = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseout", () => (isDraw = false));
canvas.addEventListener("mouseup", () => (isDraw = false));
//work  with menu

clearAllBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
//todo future features
/* let lastX = 0;
let lastY = 0;
add some modes of work (our pain app for fun)

*/
