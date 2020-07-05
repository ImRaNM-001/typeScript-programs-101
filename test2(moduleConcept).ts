/*========= All these are called "Named exports" ==================  */


// imported eveything at 1 shot
import {myVar, myFunc, myClass} from './test1(moduleConcept)';

console.log(myVar);                     // prints Hello
myFunc();                               // prints This is my function

const myc : myClass = new myClass(3, 4);
console.log(myc.add() );                // prints 7  