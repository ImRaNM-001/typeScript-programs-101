/*========= All these are called "Named exports" ==================  */

// concept 1: write single export at end instead of writing many
import {fName, lName} from './namedModuleA_(codevolution)'
console.log(`${fName} ${lName}` );                      // prints Jack Ma


// concept 2: using alias in import statement
import {fName as fn, lName as ln} from './namedModuleA_(codevolution)'
console.log(`${fn} ${ln}` );                      // prints Jack Ma


// concept 3: import statements are implicitly hoisted (i.e, always called 1st no matter where you write them 1st)
console.log('Module B loaded 1');

import {movieName, year_released} from './namedModuleA_(codevolution)'       // prints "Module A loaded" but at the top before above statements

console.log('Module B loaded 2');       
console.log(`${movieName} was released on the year ${year_released}`);      // prints Mujhe Kuch Kehna Hai was released on the year 2001




// concept 4: import's are read-only i.e, cannot override import's for primitives but can do for objects
import {fName11, lName22, perObject} from './namedModuleA_(codevolution)'

// fName11 = 'Vhelmer';              trying to override fName11 (primitive) which is not allowed
console.log(`${fName11} ${lName22}` );                      // prints Walter White

perObject['job market'] = 'is slightly going up';

console.log(perObject['job market'] );          // prints overriden value i.e, 'is slightly going up'
