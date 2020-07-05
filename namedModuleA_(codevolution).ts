/*========= All these are called "Named exports" ==================  */

// concept 1: write single export at end instead of writing many
export {fName, lName}                // we can write this line after initializing variables also

const fName : string = 'Jack',
lName : string = 'Ma';

// concept 2: using alias in import statement......[code written at imported file 'moduleB_(codevolution).ts']


// concept 3: import statements are implicitly hoisted (i.e, always called 1st no matter where you write them 1st)
export {movieName, year_released}                

const movieName : string = 'Mujhe Kuch Kehna Hai',
year_released : number = 2001;
console.log('Module A loaded');       // this line will be printed at the very 1st line in the imported .ts file



// concept 4: import's are read-only i.e, cannot override import's for primitives but can do for objects
export {fName11, lName22, perObject}               

const fName11 : string = 'Walter',
lName22 : string = 'White',

// creating a object which is user-defined/referenced data type where we can do override for 'import' statement
perObject = {
    'job market' : 'is currently down'      // 'job market' is a key written in single quotes as space is there
};



