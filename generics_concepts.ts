/* video 1: by LogRocket blog
1. using "generics" in a fn(), here i have created a custom "object type" first............ES5 code   */

type userObj = {
  name : string;
  age : number;
};

const user : userObj = {
  name : "Ayesha",
  age : 22
};

/* commented the fn() without generics
function print1(usr : userObj) : userObj {
  return usr;
};
console.log(print1(user) );                  */

// writing below fn using generics
function print1<T>(usr : T) : T{
  return usr;
};  

// passing custom "object type" in place of the generic type
console.log(print1<userObj>(user) );                    // prints { name: 'Ayesha', age: 22 }

// ES6 way
const print2 = <T, >(usr : T) : T => usr;

// I have changed the generic type as <string> so that i can return a string which is the object name, which is "Ayesha"
console.log(print2<string>(user.name) );            // prints Ayesha


// 2. using "generics" in a class
class Actress<T1, T2>{          
    constructor(private _name : T1, private _age : T2){}

    get print3() {
        return `Hello ${this._name}, you are now ${this._age} years old!`;
    }
}

const a1 : Actress<string, number> = new Actress<string, number>('Ayesha', 25);
console.log(a1.print3);                     // prints Hello Ayesha, you are now 25 years old!



/* --------------video 2: by JavaBrains------------------
1. using "generics" in a fn() only......ES6 code written below, way1            */
const echo = <T, >(par : T) : T => par,
num : number = echo(123);                       // explicit type declaration

/* way2, 
const echo = <T extends unknown>(par : T) : T => par,
num = echo (456);            // implicit type declaration (JavaScript way which i dislike)          */

console.log(num);                   // prints 123
console.log(echo(299) );            // prints 299 (another way of printing......direct printing)


// 2. using "generics" in a fn() where generics extends a class
class Person{       
    constructor(private _fName : string, private _lName : string){}     
    
    /* below fn() is actually not required
    get fullName() : string{
        return this._fName + ' ' + this._lName;
    }                                                           */
}

// writing a fn() with generics which extends a class:
const echoP = <T extends Person>(par : T) : T => par,            // can be written also written as "const echoP = <T, Person>(par : T) : T => par,"

// creating object for class "Person"
p1 : Person = new Person('Armaan', 'Superstar');

// calling the fn() with generics
console.log(echoP(p1) );                // prints   Person { _fName: 'Armaan', _lName: 'Superstar' }



