// 1- using same data types inside fn() signature
const add1 = (a : number, b : number) : number => a + b;
console.log(add1(4, 3) );                                               // prints 7 

console.log('\n=========================');

// 2- using different data types inside fn() signature
const add2 = (a : number, b : string) : (string | number) => a + b;
console.log(add2(4, '3') );                                             // prints 43

const sum = (a : string, b : boolean) : (boolean | string) => a + b;
console.log(sum('dubai ', false) );                     // prints dubai false

console.log('\n=========================');

// 3- using no data types inside fn() signature
const add3 = (a, b) => a + b;
console.log(add3(10, 19) );                                           // prints 29

console.log('\n=========================');

// 4- using any and no data type combination inside fn() signature
const add4 = (a : any, b) : any => a + b;
console.log(add4('kick ', 99) );                                         // prints kick 99
console.log(add4(true, 54) );                                           // prints 55 (because true is 1 and 1 + 54 = 55)
console.log(add4(false, 54) );                                           // prints 54 (because false is 0 and 0 + 54 = 54)


