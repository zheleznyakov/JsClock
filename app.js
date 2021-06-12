//r^2=(x-a)^2+(y-b)^2
// x = a+r*cost
// y = a+r*sint

class clockArrow {}

let el = document.getElementById("board");
let ctx = el.getContext("2d");
let fi = 270;

ctx.beginPath();
ctx.arc(100, 100, 105, 0, 2 * Math.PI);
ctx.stroke();

setInterval(function () {
  secondTick();
}, 1000);

function secondTick() {
  let x = calcX(fi, 100);
  let y = calcY(fi, 100);
  drawSeconds(x, y, "blue");
  fi += 6;
}

function calcX(t, rad) {
  let cosT = Math.cos((Math.PI * t) / 180);
  return Math.round(100 + rad * cosT);
  //return Math.round(Math.cos((2 * Math.PI * index) / 60) * rad + 100);
}
function calcY(t, rad) {
  let sinT = Math.sin((Math.PI * t) / 180);
  return Math.round(100 + rad * sinT);
  //return Math.round(Math.sin((2 * Math.PI * index) / 60) * rad + 100);
}
function drawSeconds(x, y, color) {
  let SavedRect = rectCalc(100, 100, x, y);
  let SavedImage = ctx.getImageData(
    SavedRect[0],
    SavedRect[1],
    SavedRect[2],
    SavedRect[3]
  );

  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(x, y);
  ctx.stroke();

  setTimeout(function () {
    ctx.putImageData(SavedImage, SavedRect[0], SavedRect[1]);
  }, 990);
}

function rectCalc(x0, y0, x, y) {
  let mas = [];
  mas[0] = x0 < x ? x0 : x;
  mas[0]--;
  mas[1] = y0 < y ? y0 : y;
  mas[1]--;

  mas[2] = x0 > x ? x0 : x;
  mas[2]++;
  mas[3] = y0 > y ? y0 : y;
  mas[3]++;

  console.log(mas);

  return mas;
}
