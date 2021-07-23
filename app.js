let el = document.getElementById("board");
let ctx = el.getContext("2d");
let img = document.getElementById("image1");


ctx.drawImage(img,10,10);

const cl = new Clock(210,210,150, ctx);

