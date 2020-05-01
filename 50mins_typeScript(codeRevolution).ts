export {}       /* .ts programs when compiled using this line will generate .js program with following 2 lines of code............
'use strict'; 
exports._esModule = true;                     */
let msg = 'coderevolution 50 mins challenge';       
console.log(msg);                       // prints coderevolution 50 mins challenge

// assigning null and undefined (which are sub types of other data types) to same types and other data types as well
// same type assignment
let n : null = null,
u : undefined = undefined;

console.log(n, u);      // prints null undefined

// different type assignment
let b : boolean = null,
s1 : string = undefined;
console.log(b, s1);         // prints null undefined

// learning enum type (a way of friendly name to a set of numeric values)
enum Color {Red, Green, Blue};

// creating a variable ecl of enum type
const ecl : Color = Color.Green;
console.log(ecl);               // prints 1 as Green is in 1st position

// temerping/customizing the index value (this is a good practice where we have assigned an enum value instead of random number assignment above)
enum Rang {Red = 6, Green, Blue};

const rcl : Rang = Rang.Red;
console.log(rcl);               // prints 6 or,
console.log(Rang.Red);          // also prints 6

console.log(Rang[2]);           // prints undefined as index starts from 6 above
console.log(Rang[7]);           // prints Green as index starts from 6 above

/* part I -> few problems with "any" type which gotten rid by data type "unknown" of TS 3.0
let vari : any = 10;
console.log(vari.name);     // should print undefined (as checked in online compiler) but throws error

// below ones are wrong code as variable cannot be used a fn() and "number" type cannot use string method

vari();
console.log(vari.toUpperCase() );          

// part II -> learning "unknown" data type, any value is assignable to type unknown but we can't access any properties of an unknown type or construct them,  below code shows compile time error right away as opposed to "any" type

let vari : unknown = 10;
console.log(vari.name);    
vari();
console.log(vari.toUpperCase() );                   */

// optional parameters in a fn()
const sum = (num1 : number, num2 ?: number) : number =>{
    if(num2) return num1 + num2;      // here we are telling if num2 passed as argument, then add num1 + num2
    else return num1;
                
    // or, trying Brad Traversy way
    if(num2 == undefined) return num1;
    else return num1 + num2;
}           
console.log(sum(4) );           // prints 4
console.log(sum(4, 44) );       // prints 48


// interfaces with an optional property
interface IPerson{
    fName : string;
    lName ?: string;
}

// initialize an object "ramu" of "IPerson" interface type
const war : IPerson = {
    fName : 'Kabir'        
    // lName : 'stans'         // intentionally commented optional property lName
},

printFullName = (obj : IPerson) : void => {
    if(obj.lName) console.log( `${obj.fName} ${obj.lName}` );  // used template literals where comma not required
    else console.log(obj.fName);
}

// calling the void fn()
printFullName(war);                  // prints Kabir






















