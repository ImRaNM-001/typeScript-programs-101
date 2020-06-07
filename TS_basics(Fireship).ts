// 1- TypeScript auto assigns by enforcing types to a variable, see 2nd example
let lky;                                // here TypeScript implicitly has given "any" type to variable lky
console.log(typeof lky);                 // prints undefined as nothing is assigned to this variable

/* but if initialize "lky" as a value of "number" type, then we cannot re-initialize with value of "string" type
ex: let lky = 23;             // here compiler has taken lky as "number" type, now
lky = 'samrat_&_co';          // it will throw error as lky is already freezed as "number" type            */



// 2- creating our custome type or mixed type (Type Aliases)
type style = string;                         // video creator calls this one as super redundant
const txt : style = 'Benjo';
console.log(txt);                                     // prints Benjo

// created another example of literal types using union type separating with a "pipe" operator
type style2 = 'bold' | 'italic' | 23;           // implicitly means 'string' or 'number'

// creating another variable named style
let ft : style2;
ft = 'something';
console.log(ft);                 // prints (this one has some errors)


// 3- fn() to compute power of a number
const power1 = (x : number, y : number) : number => Math.pow(x, y);
console.log(power1(2, 3);                             // prints 8 (works in typescript playground)
console.log(power1(2, '3');                           // prints 8 (works in typescript playground)

const power2 = (x : number, y : number) : string => Math.pow(x, y).toString();      // since return type is string, we have to return string only.
console.log(power2(2, '3');                         // prints 8 which is actually a string (works in typescript playground)


// 4- (bit tricky) creating a custom type of "Tuple"
type myList = [number, string, boolean];

// now creating an array of "myList1" type
const tupArr : myList = [];                    // or, const tupArr : myList[] = [];       (i prefer this way)
tupArr.push(1);
tupArr.push('120');
tupArr.push(true);                 

console.log(tupArr);	                    // prints  [1, "120", true]


// again, another example where i am making tuple types optional
type otherList = [number, string, boolean?];

// now creating an array of "myList1" type
const tupBrr : otherList = [];                    // or, const tupBrr : otherList[] = [];       (i prefer this way)
tupBrr.push(1);
tupBrr.push('120');               

console.log(tupBrr);                            // prints  [1, "120"]


// 5- understanding Generics (this code won't work, i will to refine it when i master this concept)
class Observable<T>{
    constructor(public val : T){}
}

let x : Observable<number>,     // Observable has explicitly "number" type
y : Observable<Person>,         // Observable has explicitly "Person" interface type
z = new Observable(23);         // Observable has implicitly "number" type








