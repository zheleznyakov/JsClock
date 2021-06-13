let el = document.getElementById("board");
let ctx = el.getContext("2d");
let fi = 270;

ctx.beginPath();
ctx.arc(100, 100, 105, 0, 2 * Math.PI);
ctx.stroke();

const ar = new clockArrow(100, 100, 100, ctx);

const ar2 = new clockArrow(200, 200, 50, ctx);
