class Clock
{
    constructor(x,y,rad,canvasContext) {
        this._coordX = x;
        this._coordY = y;
        this._radius = rad;
        this._context = canvasContext;
        this._date = new Date();

        this._ar1 = new clockArrow(x, y, rad, "sec", canvasContext,this._date);
        this._ar2 = new clockArrow(x,y,rad*0.8,"min",canvasContext,this._date);
        this._ar3 = new clockArrow(x,y,rad*0.7,"hour",canvasContext,this._date);
        this._ar1.setColor("red");
        this._ar2.setColor("blue");
        this._ar3.setColor("blue");
        this._ar2.setLineWidth(5);
        this._ar3.setLineWidth(7);
        this.draw();
        setInterval(()=>{this.draw()},1000);
    }

    draw()
    {
        let d = new Date();
        this._ar1.clearArrow();
        this._ar2.clearArrow();
        this._ar3.clearArrow();

        this._ar1.updateDate(d);
        this._ar2.updateDate(d);
        this._ar3.updateDate(d);

        this._ar1.saveRect();
        this._ar2.saveRect();
        this._ar3.saveRect();

        this._ar3.draw();
        this._ar2.draw();
        this._ar1.draw();
    }


}