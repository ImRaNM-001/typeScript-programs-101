// using class and constructor to add 2 numbers (qavbox - "Setup and run typescript code in VSCode" video)
class Add{
      x : number;             
      y : number;    // we don't write const and let for variables at class level as "constants are not supported at class level", const is moreover explicitly a final keyword which will prevent further initialization whereas appending "let" keyword for class (global) variables gives  "SyntaxError: Unexpected identifier"

    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }

    show() : void {               // ES6 style way........ show = () : void => {    ,we can also assign any data type to show() fn as it is not returning anything (easy to know bcoz of console log statement)
        const sum : number = this.x + this.y;
        console.log('The sum is', sum);                 
    }
}
const ad : Add = new Add(11, 22);
ad.show();                                 // prints The sum is 33          