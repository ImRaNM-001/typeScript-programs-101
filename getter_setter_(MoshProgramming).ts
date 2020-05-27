class Point{
    constructor(private _x ?: number, private _y ?: number){}


     draw() : (string | number){
        return this._x + ' ' + this._y;
    }

    get x() : (number | undefined){
        return this._x;
    }

    set x(val) : (number | undefined | string){
        if(val < 0) throw new Error('value cannot be less than 0');
        else this._x = val;
    }

}
const pp : Point = new Point();
let x = pp.x;
pp.x = 10;

console.log(pp.draw);