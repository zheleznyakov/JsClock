//r^2=(x-a)^2+(y-b)^2
// x = a+r*cost
// y = a+r*sint

class clockArrow {
  //#coordX = 0;
  //#coordY;
  //#radius;
  // #context;
  //#fi = 270;

  constructor(x, y, rad, type, canvasContext) {
    this._coordX = x;
    this._coordY = y;
    this._radius = rad;
    this._context = canvasContext;
    this._type = type;

    this._savedImage = null;

    setInterval(() => {
      this.secondTick();
    }, 1000);
  }

  secondTick() {
    let d = new Date();

    switch (this._type) {
      case "sec":
        let s = d.getSeconds();
        this._fi = 270 + 6 * s;
        break;
      case "min":
        let m = d.getMinutes();
        this._fi = 270 + 6 * m;
        break;
      case "hour":
        let h = d.getHours();
        this._fi = 270 + (360 / 12) * h;
        //console.log(this._fi);
        break;
    }

    let x = this.calcX();

    let y = this.calcY();
    this.drawSeconds(x, y, "blue");
  }

  drawSeconds(x, y, color) {
    if (this._savedImage)
      this._context.putImageData(
        this._savedImage,
        this._savedRect[0],
        this._savedRect[1]
      );
    let SavedRect = this.rectCalc(this._coordX, this._coordY, x, y);
    let SavedImage = this._context.getImageData(
      SavedRect[0],
      SavedRect[1],
      SavedRect[2],
      SavedRect[3]
    );
    this._savedImage = SavedImage;
    this._savedRect = SavedRect;

    this._context.strokeStyle = color;
    this._context.beginPath();
    this._context.moveTo(this._coordX, this._coordY);
    this._context.lineTo(x, y);
    this._context.stroke();
    console.log(this._fi);

    // setTimeout(() => {
    //   this._context.putImageData(SavedImage, SavedRect[0], SavedRect[1]);
    // }, 990);
  }
  calcX() {
    let cosT = Math.cos((Math.PI * this._fi) / 180);
    return Math.round(this._coordX + this._radius * cosT);
  }
  calcY() {
    let sinT = Math.sin((Math.PI * this._fi) / 180);
    return Math.round(this._coordX + this._radius * sinT);
  }

  rectCalc(x0, y0, x, y) {
    let mas = [];
    mas[0] = x0 < x ? x0 : x;
    mas[0]--;
    mas[1] = y0 < y ? y0 : y;
    mas[1]--;

    mas[2] = x0 > x ? x0 : x;
    mas[2]++;
    mas[3] = y0 > y ? y0 : y;
    mas[3]++;

    //console.log(mas);

    return mas;
  }
}
