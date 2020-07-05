/*========= "default exports" are mainly used for single exports and imports ==================  */

// concept 1: when using "default" keyword, no need of curly braces {} and we can import using any other variable name also
import tere_naam from './defaultModuleA_(codevolution)'         // imported tere_naam instead of name
console.log(tere_naam);                 // prints Bbuddah


// concept 2: using alias in import statement
import {default as t} from './defaultModuleA_(codevolution)'
console.log(t);                              // prints Bbuddah




