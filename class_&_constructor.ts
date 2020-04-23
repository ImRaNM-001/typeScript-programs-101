// using class and constructor to add 2 numbers (qavbox - "Setup and run typescript code in VSCode" video)
class Add{
      x : number;             
      y : number;   // we don't write const and let for variables at class level as "constants are not supported at class level"

    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }

    show(){                                     // ES6 style way:     show = () => {
        const sum = this.x + this.y;
        console.log('The sum is', sum);        
    }
}
const ad = new Add(11, 22);
ad.show();                                 // prints The sum is 33