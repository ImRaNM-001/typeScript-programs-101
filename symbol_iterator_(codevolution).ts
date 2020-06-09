/* Notes:
1. codevolution wrote a .js file but as i am passionate about TS, i wrote fresh code in .ts file

2. for-of loop is used to iterate over objects and in order it should work, it needs to have a special kind of method called "iterator" method

3. how to know if a data type (he referred as object) has "iterator" method? we can check if the object key named "Symbol.iterator" has a function defined

4. It's main purpose is to check if we can use "for-of" loop with a particular type like string, number, array etc. etc.                              */

// ex 1:
const str : string = 'Akash',
num : number = 55,
bool : boolean = true,
arr : number[] = [3, 4, 7];
                             
// writing an object typescript way
type objType = {
    name : string
};          

const obj : objType = {
    name : 'Sagar'      
};                                                  

/* javascript way of writing an object
obj = {                             
    name : 'Sagar'
};                              */        


console.log('for string the type is ==>', typeof str[Symbol.iterator] );    // string ==> function (means we can use 'string' in a for-of loop)
console.log('for number the type is ==>', typeof num[Symbol.iterator] );    // number ==> undefined (can't use)
console.log('for boolean the type is ==>', typeof bool[Symbol.iterator] );  // boolean ==> undefined (can't use)
console.log('for array the type is ==>', typeof arr[Symbol.iterator] );     // array ==> function (we can use)
console.log('for object the type is ==>', typeof obj[Symbol.iterator] );    // object ==> undefined (can be used with a trick)

