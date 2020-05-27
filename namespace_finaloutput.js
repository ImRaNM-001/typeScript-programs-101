var StudentCalc;
(function (StudentCalc) {
    StudentCalc.myFunc = (feeAmount, term) => feeAmount * term;
})(StudentCalc || (StudentCalc = {}));
// import {StudentCalc} from './test1(namespaceConcept)';      // this code won't work as "StudentCalc" is not a module, it is declared as a namespace and hence need to be refrenced in a different way shown below with .ts file extension
/// <reference path='./test1_namespaceConcept.ts'/>        
// calling the fn() by the syntax -- namespace.fn() name just like Java's classname.methodname()
console.log(StudentCalc.myFunc(4000, 3)); // prints 12000 in target js file
/* this file cannot be run directly using "Code Runner" extension, run by following command:

open new terminal at typescript location and give this command-->    "tsc --target es6 test2_namespaceConcept.ts --outFile namespace_finaloutput.js"

Note: 1. we can write "outFile" or "OutFile", no issues will come
2. the filename should not have () in it otherwise it won't accept compilation
3. these targets can be used:   '--target' option must be: 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'.                             */
