/*========= All these are called "Named exports" ==================  */

// initialize a simple variable and exporting it
const myVar : string = 'Hello';

// initialize a simple fn() and exporting it
const myFunc = () : void => console.log('This is my function');

// created a class and exporting it
class myClass{
    v1 : number;
    v2 : number;

    constructor(v1: number, v2 : number){
        this.v1 = v1;
        this.v2 = v2;
    }

    // new way/short way of writing constructor (where global variables at class level not required)
    // constructor(private _v1 : number, private _v2 : number){}


    add() : number{
        return this.v1 + this.v2;
    }
}

// shorter way via single 'export' as learnt from "codevolution - Typescript Tutorial - 26 - Named Exports" video............we can also write it at the beginning
export {myVar, myFunc, myClass}

// making use of above constants (i.e, calling them) in same file (will not work if exported)
/*
console.log(myVar);                         // prints Hello
myFunc();                                   // prints This is my function

const myc = new myClass(3, 4);
console.log(myc.add() );                 // prints 7                     */

