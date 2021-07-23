//r^2=(x-a)^2+(y-b)^2
// x = a+r*cost
// y = a+r*sint

class clockArrow {
    constructor(x, y, rad, type, canvasContext, d=new Date()) {
        this._coordX = x;
        this._coordY = y;
        this._radius = rad;
        this._context = canvasContext;
        this._type = type;
        this._date = d;
        this._calculatedX = 0;
        this._calculatedY = 0;
        this._color = "blue";
        this._lineWidth = 2;

        this._savedImage = null;
    }
    setColor(color){
        this._color = color;
    }
    setLineWidth(width){
        this._lineWidth = width;
    }
    updateDate(d)
    {
        this._date = d;
        this.calculateCoords();
    }
    draw() {

        this.drawArrow();
    }

    clearArrow() {
        if (this._savedImage)
            this._context.putImageData(this._savedImage, this._savedRect[0], this._savedRect[1]);
    }
    calculateCoords()
    {
        let d = this._date;

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

        this._calculatedX = this.calcX();

        this._calculatedY = this.calcY();
    }
    saveRect(){
        let SavedRect = this.rectCalc(this._coordX, this._coordY, this._calculatedX, this._calculatedY);
        let SavedImage = this._context.getImageData(
            SavedRect[0],
            SavedRect[1],
            SavedRect[2],
            SavedRect[3]
        );
        this._savedImage = SavedImage;
        this._savedRect = SavedRect;
    }

    drawArrow() {
        this._context.strokeStyle = this._color;
        this._context.lineWidth = this._lineWidth;
        this._context.beginPath();
        this._context.moveTo(this._coordX, this._coordY);
        this._context.lineTo(this._calculatedX, this._calculatedY);
        this._context.stroke();
        console.log(this._fi);
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

        return mas;
    }
}
