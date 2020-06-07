// 1. tuple inside an object
const person: {
    name : string,
    age : number,
    hobbies : string[],           // declaring an array
    roles : [number, string]      // declaring a tuple
} = {
    name : 'Samrat',
    age : 35,
    hobbies : ['spying', 'boxing'],         // initializing an array
    roles : [23, 'case of bungalow']         // initializing a tuple
};

// validating each elements of "hobbies" array are string and have string fns() only
for(const elem of person.hobbies) console.log(elem.toUpperCase() );       // prints SPYING, BOXING (vertical lines)


// pushing a new element to the tuple
person.roles.push('in shimla');
console.log(person.roles);                  // prints [ 23, 'case of bungalow', 'in shimla' ]

// iterating all elements of tuple
for(const elem of person.roles) console.log(elem);      // prints 23, case of bungalow, in shimla (vertical lines)


// 2. enum inside object
enum Role {Admin = 5, Read_Only = 100, Author = 200};

const personA: {
    name : string,
    age : number,
    hobbies : string[],           // declaring an array
    roles : number 
} = {
    name : 'Kalyug',
    age : 500,      
    hobbies : ['spying', 'shooting'],         // initializing an array
    roles : Role.Admin
};

if(personA.roles === Role.Read_Only) console.log('Is an admin');        
else console.log('Is different element of enum');                   // prints Is different element of enum


// 3. union types (we have added union data types in fn() parameters using pipe | operator)
const combine = (in1 : number | string, in2 : number | string) : (number | string) =>{
    let result;
    if(typeof in1 === 'number' && typeof in2 === 'number') result = in1 + in2;
    else result = in1.toString() + in2.toString();
    return result;
};

// calling combine fn() by inputting numbers only
console.log(combine(30, 26) );                      // prints 56

// calling combine fn() by inputting strings only
console.log(combine('Kal', 'yug') );                      // prints Kalyug


// 4. Literal types + Type Aliases
type ns = number | string;              // 1st type alias for 'number' or 'string'
type nt = 'as-number' | 'as-text';      // 2nd type alias for literal types 'as-number' or 'as-text'

const combineA = (in1 : ns, in2 : ns, resultConversion : nt) : ns =>{
    let result;
    if(typeof in1 === 'number' && typeof in2 === 'number' || resultConversion === 'as-number') result = +in1 + +in2;
    else result = in1.toString() + in2.toString();
    return result;
};

console.log(combineA(30, 26, 'as-number') );                // prints 56
console.log(combineA('30', '26', 'as-number') );             // prints 56
console.log(combineA('Kal', 'yug', 'as-text') );              // prints Kalyug


// 5. fn() types, using "return" in undefined type fn()
const ptR = (n1 : number) : undefined =>{
    console.log('Result:', n1);
    return;    
}
ptR(44);                    // prints Result: 44

// using void + "return" statement together
const qtR = (n1 : number) : void =>{
    console.log('Result:', n1);
    return;  
}
qtR(55);                    // prints Result: 55


// 6. "Function" data type used in fns()
let valuesFn : Function;        // wrong used, don't used this

let valFn : (_num : number) => number;

// now assigning valFn to the above "ptR" fn*()
valFn = ptR;        
valFn(786);                               // prints Result: 786


// 7. callback fns()...........passing 3rd argument as fn() which takes 1 parameter of "number" type and has "void" return type. Note: if "void" is used 1 time in any inside fn() like the callback fn(), it has to be also used as main fns() return type

const aDH = (n1 : number, n2 : number, callBckFn : (n3 : number) => void) : void => callBckFn(n1 + n2);   

// calling the main fn()
aDH(11, 33, res => console.log(res) );                         // prints 44


// 8. "unknown" and "never" type
let input : unknown, name : string;

input = 5;      
input = 'vheem';

if(typeof input === 'string') input === name;
console.log(input);                         // prints vheem

// "never" types specifically used as fn() types, specifically intended to never return anything and essentially crash or break our script...........don't run below code, it is just pasted for understanding purpose
const genErr = (msg : string, code : number) : never =>{
    throw {m1: msg, errCode : code};
},

errResult = genErr('An error occured!', 501);
console.log(errResult);              // prints throw { m1: msg, errCode: code };    ^ { m1: 'An error occured!', errCode: 501 }



 
