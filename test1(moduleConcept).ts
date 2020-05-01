// initialize a simple variable
export const myVar : string = 'Hello';

// initialize a simple fn()
export const myFunc = () : void => console.log('This is my function');

// created a class
export class myClass{
    v1 : number;
    v2 : number;

    constructor(v1: number, v2 : number){
        this.v1 = v1;
        this.v2 = v2;
    }

    add() : number{
        return this.v1 + this.v2;
    }
}

// making use of above constants (i.e, calling them) in same file (will not work if exported)
/*
console.log(myVar);                         // prints Hello
myFunc();                                   // prints This is my function

const myc = new myClass(3, 4);
console.log(myc.add() );                 // prints 7                     */

