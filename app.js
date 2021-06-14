let el = document.getElementById("board");
let ctx = el.getContext("2d");
let fi = 270;

ctx.beginPath();
ctx.arc(110, 110, 105, 0, 2 * Math.PI);
ctx.stroke();

const ar = new clockArrow(110, 110, 80, "hour", ctx);

const ar2 = new clockArrow(110, 110, 100, "min", ctx);

const ar3 = new clockArrow(110, 110, 100, "sec", ctx);
