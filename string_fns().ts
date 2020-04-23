let mystr : string = 'Yo World';

// 1- charAt()
console.log(mystr.charAt(0) );          // prints Y

const mystr_1 = mystr.charAt(3); 
console.log(mystr_1);                     // prints W
console.log(typeof mystr_1);               // prints string


// 2- concat()
const str1 = ' Sdet'; 
console.log(mystr.concat(str1) );                    // prints Yo World Sdet

const str2 = ' teaches';
console.log(mystr.concat(str1).concat(str2) );          // prints Yo World Sdet teaches (Pavan way)
// console.log(mystr.concat(str1, str2) );                 // also prints Yo World Sdet teaches (Raghav-Pal way)

// 3- replace()
const str3 = 'typescript practice',
str3_rep = str3.replace(/[p]/gi, '');           // used to regex to replace all p's
console.log(str3_rep);                          // prints tyescrit ractice

console.log(str3.replace('t', 'D') );        // will replace only first t occurance, prints Dypescript practice
console.log(str3.replace('type', 'Shell') );        // prints Shellscript practice


// 4- split()
const fruits : string = 'Apple Oranges Melon';
console.log(fruits.split(' ') );            // prints [ 'Apple', 'Oranges', 'Melon' ]
console.log(fruits.split(' ', 2) );      // prints 1st 2 elements of the array in question i.e, [ 'Apple', 'Oranges' ]      
console.log(fruits.split(' ', 1) );      // prints 1st element of the array in question i.e, [ 'Apple']


// 5- substring()
mystr = 'iron man mark 2';
let subStr = mystr.substring(0, 4);   // it starts from oth index(letter i) and goes till 4th index(white space) but ignores 4th index
console.log(subStr);                    // prints iron

subStr = mystr.substring(2, 6);         // starts from 2nd index and goes till 6th but ignores 6th
console.log(subStr);                // prints on m 


// 6- toUpperCase() && toLowerCase()
console.log(mystr.toUpperCase() );          // prints IRON MAN MARK 2
console.log(mystr.toLowerCase() );          // prints iron man mark 2

// 7- trim()
mystr = '   Avengers_End    Game    ';
console.log(mystr.trim() );         // this fn() will kill starting and ending spaces (not middle), prints Avengers_End    Game

console.log(mystr.trimRight() );        // kills right spaces, prints    Avengers_End    Game   (but not working due to ES6 library not updated issues till .endsWith() fns)
console.log(mystr.trimLeft() );   


// 8- startsWith() and endsWith()
mystr = 'Tony @ work    123!!';
console.log(mystr.startsWith('ton') );              // prints 
console.log(mystr.startsWith('Ton') );              // prints 

console.log(mystr.endsWith('3!') );              // prints 
console.log(mystr.endsWith('!!') );              // prints 
 



