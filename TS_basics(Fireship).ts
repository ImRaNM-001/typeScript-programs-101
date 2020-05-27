// 1- TypeScript auto assigns by enforcing types to a variable, see 2nd example
let lky;                                // here TypeScript implicitly has given "any" type to variable lky
console.log(typeof lky);                 // prints undefined as nothing is assigned to this variable

/* but if initialize "lky" as a value of "number" type, then we cannot re-initialize with value of "string" type
ex: let lky = 23;             // here compiler has taken lky as "number" type, now
lky = 'samrat_&_co';          // it will throw error as lky is already freezed as "number" type            */



// 2- creating our custome type or mixed type
type style = string;                         // video creator calls this one as super redundant
const txt : style = 'Benjo';
console.log(txt);                                     // prints Benjo

// created another union type by separating with a "pipe" operator
type style2 = 'bold' | 'italic' | 23;

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
const arr : myList = [];                    // or, const arr : myList[] = [];       (i prefer this way)
arr.push(1);
arr.push('120');
arr.push(true);                 

console.log(arr);	                    // prints  [1, "120", false]


// again, another example where i am making tuple types optional
type otherList = [number, string, boolean?];

// now creating an array of "myList1" type
const brr : otherList = [];                    // or, const arbrrr : otherList[] = [];       (i prefer this way)
brr.push(1);
brr.push('120');               

console.log(brr);                            // prints  [1, "120"]


// 5- understanding Generics (this code won't work, i will to refine it when i master this concept)
class Observable<T>{
    constructor(public val : T){}
}

let x : Observable<number>,
y : Observable<Person>,
z = new Observable(23);








