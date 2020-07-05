// ============== Rest Parameter ==================     Ex 1: taken from "tutorialsteacher.com" site (also bookmarked in chrome)

const geet = (greeting : string, ...names : string[]) : string => `greeting ${names.join(', ')}!`;     /* I have used template literals instead of single quotes.We can also write using single quotes as below:
=> greeting + ' ' + names.join(', ') + '!' ;                    */

console.log(geet('Hi', 'Stevey Mendez', 'Jhanvi') );     // prints   greeting Stevey Mendez, Jhanvi !
console.log('\n');


// Ex 2: taken from "codevolution video "Typescript Tutorial - 13 - Rest Operator"....i converted to ES6 syntax
const displayColors = (msg : string, ...colors : string[]) : void =>{
    console.log(msg);               // prints the msg string passed------>      List of colors    
    console.log(colors);            // prints the colors array like-------->    ['Red']     ['Blue']
 // console.log(arguments.length);  // works only in ES5 syntax, code below 

    // he wrote "for-in" loop but i prefer "for-of"
    for(const elem of colors) console.log(elem); 
    console.log('\n');
},

p1msg = 'List of colors';       // (p1msg means message at parameter 1, just a name i gave)

// calling the damn fn()
displayColors(p1msg, 'Red');
displayColors(p1msg, 'Red', 'Blue');
displayColors(p1msg, 'Red', 'Blue', 'Green');


/* ES5 syntax
const displayColors = function(msg : string, ...colors : string[]) : void{
    console.log(msg);             
    console.log(colors);           
    console.log(arguments.length);  // prints the count of the arguments in the fn() each time--->  ex 2, 3, 4

    for(const elem of colors) console.log(elem); 
    console.log('\n');
},

p1msg = 'List of colors';      

displayColors(p1msg, 'Red');
displayColors(p1msg, 'Red', 'Blue');
displayColors(p1msg, 'Red', 'Blue', 'Green');

============== Notes:
1. Rest parameter represents indefinite no of arguments we can pass in our fn() signature as an array (codevolution definition)
specified in fn() declaration so that it takes n no. of arguments during fn() call and makes them into a single array.

2. (very important): Rest parameters must always come at last in function signature otherwise TS compiler will throw error                                   */


// ============== Spread Parameter ================== ex 1: taken from "codevolution video "Typescript Tutorial - 14 - Spread Operator"
const displayColorsA = (msg : string, ...colors : string[]) : void =>{
    console.log(msg);
    for(const elem of colors) console.log(elem); 
    console.log('\n');    
},

p2msg = 'List of colors',
colorsArr : string[] = ['Purple', 'Magneta', 'Black'];

displayColorsA(p2msg, 'faloda');        // only the last and latest fn() call will be taken for execution and this one would be ignored

displayColorsA(p2msg, ...colorsArr);            // prints   List of colors Purple Magneta Black (vertical lines)



