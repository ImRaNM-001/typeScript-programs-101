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


// 3. 

































