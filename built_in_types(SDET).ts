// 1. number type
const first : number = 12.0,
second : number = 0x37CF,
third : number = 0o377,
fourth : number = 0b111001;

console.log(first, second, third, fourth);      // prints 12 14287 255 57

// 2. string type
const empName : string = 'Arya',
empDept : string = 'ECE',
stmt = empName + ' works in ' + empDept;

console.log(empName, empDept);              // prints Arya ECE
console.log(stmt);                          // prints Arya works in ECE


// 3. boolean type
const result : boolean = true;
console.log(result);                    // prints true


// 4. void type (used as a return type fn() where no values are returned, variable of void type is not much useful as we can only assign undefined or null to it)
const hello = () : void => console.log('bang bang');    
hello();                        // hello is a fn() which when called prints bang bang

// 5. null type
let n1 : number = null;
n1 = 100;                   // re initilizing new value to n1
console.log(n1);            // prints 100

// 6. undefined type, a primitive type which denotes all uninitialized variables
let u2 : string = undefined;
console.log(u2);                        // prints undefined
u2 = 'yo yo';
console.log(u2);                    // prints yo yo

// 6. any type
let val : any = 'Hi';
val = 1105;
console.log(val);               // prints 1105

val = false;
console.log(val);               // prints false

// using any in a fn()
const f1n = ( (par1 : any, par2 : any) => par1 + par2 );

// adding 2 numbers
console.log(f1n(2, 4) );                        // prints 6

// adding 2 string
console.log(f1n('Hello', ' World') );           // prints Hello World

// adding 1 string and 1 number
console.log(f1n(4, ' ladki') );                 // prints 4 ladki





