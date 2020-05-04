let mystr : string = 'Yo World';

// 1- charAt()
console.log(mystr.charAt(0) );          // prints Y

const mystr_1 = mystr.charAt(3); 
console.log(mystr_1);                     // prints W
console.log(typeof mystr_1);               // prints string

console.log('\n=======================');

// printing each character of string just like an array
for(let index = 0;  index < mystr.length;   index++) console.log(mystr[index] );    // prints Y o   W o r l d (vertical lines)
console.log('\n=======================');

for(const elem of mystr.split('') ) console.log(elem);  // prints Y o   W o r l d (vertical lines)
console.log('\n=======================');

mystr.split('').forEach(elem => console.log(elem) );          // prints Y o   W o r l d (vertical lines)
console.log('\n=======================');

/*  below code of spread operator doesn't work
for(const elem of ([...mystr]) ) console.log(elem);  
[...mystr].forEach(elem => console.log(elem) );              */

// 2- concat()
const str1 : string = ' Sdet'; 
console.log(mystr.concat(str1) );                    // prints Yo World Sdet

const str2 : string = ' teaches';

// EASY way (Raghav-Pal way)
console.log(mystr.concat(str1, str2) );             // prints "Yo World Sdet teaches"
console.log('\n=======================');

// Hard way (Pavan way)
console.log(mystr.concat(str1).concat(str2) );          // prints "Yo World Sdet teaches" 

// 3- replace()
const str3 : string = 'typescript practice',
str3_rep = str3.replace(/[p]/gi, '');           // used to regex to replace all p's
console.log(str3_rep);                          // prints tyescrit ractice

console.log('\n=======================');

console.log(str3.replace('t', 'D') );        // will replace only first t occurance, prints Dypescript practice
console.log(str3.replace('type', 'Shell') );   // replaces "type" word with "Shell" and prints Shellscript practice

console.log('\n=======================');

// 4- split()
const fruits : string = 'Apple Oranges Melon';
console.log(fruits.split(' ') );          // fn() will activate where it finds first white space and prints     ['Apple', 'Oranges', 'Melon']
console.log(fruits.split(' ', 2) );      // prints 1st 2 elements of the array in question i.e, ['Apple', 'Oranges']      
console.log(fruits.split(' ', 1) );      // prints 1st element of the array in question i.e, ['Apple']

console.log('\n=======================');       

// 5- substring(), basically does same job what .slice() fn does
mystr = 'iron man mark 2';
let subStr : string = mystr.substring(0, 4);   // it starts from oth index(letter i) and goes till 4th index(white space) but ignores 4th index
console.log(subStr);                    // prints iron

subStr = mystr.substring(2, 6);         // starts from 2nd index and goes till 6th but ignores 6th
console.log(subStr);                    // prints on m 

console.log('\n=======================');

// 6- toUpperCase() && toLowerCase()
console.log(mystr.toUpperCase() );          // prints IRON MAN MARK 2
console.log(mystr.toLowerCase() );          // prints iron man mark 2

console.log('\n=======================');           

// 7- trim()        
mystr = '   Avengers_End    Game    ';
console.log(mystr.trim() );         // this fn() will kill starting and ending spaces (not middle spaces), prints Avengers_End    Game
console.log('\n======================='); 

console.log(mystr.trimRight() );        // kills right spaces, prints    Avengers_End    Game   
console.log('\n======================='); 

console.log(mystr.trimLeft() );             // kills right spaces, prints Avengers_End    Game   
console.log('\n======================='); 

// 8- startsWith() and endsWith()
mystr = 'Tony @ work    123!!';
console.log(mystr.startsWith('ton') );             // prints false
console.log(mystr.startsWith('Ton') );             // prints true

console.log(mystr.endsWith('3!') );              // prints false
console.log(mystr.endsWith('!!') );              // prints true                 
 

