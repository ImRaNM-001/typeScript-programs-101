// 1- TypeScript auto assigns by enforcing types to a variable, see below example
let w;           // here TypeScript implicitly has given any type to variable w

w = 2;
w = 'Hey';
console.log(w);                     // prints Hey
console.log('\n===============================');

// 2- creating own mixed data type (Type Aliases)
type ownMix = number | number[];

let num : ownMix = 11,
ary : ownMix = [3, 67, -1];

console.log(num);           // prints 11
console.log(ary);           // prints [3, 67, -1]
console.log('\n===============================');

num = 44.78;
console.log(num);           // prints 44.78
console.log('\n===============================');


// 3- elaborating "enum" data type (Uppercase 1st letter (ex: Tomato) recommended)
enum VeggieList {tomato, onion, potato};      // recommended to use uppercase 1st letter of each element

console.log(VeggieList.potato);                     // prints 2     as potato is at 2nd index

enum FoodList {tomato = 0, onion = 1, salt = 17, potato = 44};
console.log(FoodList.potato);                   // prints 44    because of the no assigned after = sign

enum FoodList1 {tomato = 0, onion, salt = 1, potato = 3};
console.log(FoodList1.salt);                    // prints 1     as salt is assigned no 1 despite being at 2nd index, it ignores index no and considers given no
console.log(FoodList1.onion);                    // prints 1     as onion also comes under no 1 (implicitly)
console.log('\n===============================');


// 4- interface and fns() together
interface IProfile{         
    name : string,
    id : number                 // can use comma also instead of semi-colon (;)
}

// creating an object which will be passed as an argument value to the parameter of getName() fn
const obj1 : IProfile = {
    name : 'sahaj',
    id : 6749
},

// creating a fn() which will take a parameter of interface type
getName = (obj : IProfile) : string => obj.name;

// now calling the fn() with return type and printing the value
console.log(getName(obj1) );                    // prints sahaj
console.log('\n===============================');


// 5- private properties (i.e variables) of a class can only be accessed by non-static methods inside
class Car{
    private color : string;

    // longer/usual way
    constructor(color : string){
        this.color = color;
    }   

    // shorter way (works only on typescript playground web compiler)
    // constructor(private _color ?: string){  }  
    
    // longer/usual way
    fetchTheCarColor() : string{
        return this.color;
    }   

     // shorter way (using getter method but works only on typescript playground web compiler)
    /* get theCarColor():string{
        return this._color;
    }           */
}

// creating a new object of Car class
const laalCar : Car = new Car('Red');

// calling the getTheCarColor() fn to print the car color name, longer way
console.log('Car color is', laalCar.fetchTheCarColor() );         // prints Car color is Red

// shorter way (works only on typescript playground web compiler), calling the getter method which acts like a variable instead of a fn (see white color of fn below)
// console.log('Car color is', laalCar.theCarColor);         // prints Car color is Red

// 6- comparing all TypeScript access modifiers..........(works fine on typescript playground web compiler, hence won't care about the error rectfication here in this stupid IDE)

class Car12{
    private color : string;
    protected maxSpeed : number;
    public price : number;
    // except above non-static variables, written nothing inside parent class including constructor
}

class Honda extends Car12{
    constructor(color : string, maxSpeed : number, price : number) {
        super();                // we must explicitly write super() keyword to show we are calling the hidden no-argument parent class constructor
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.price = price;
    }                       

    // using getter method to use and return private variable (that's the only way to access private property)
    get carColor() : string{
        return this.color;
    }

    // protected variable of parent class anyways is accessible inside child class as it becomes private inside child class
    get carSpeed() : number{         
        return this.maxSpeed;
    }
}                               // class closed here

// creating a new object for the child class Honda
const hn : Honda = new Honda('White', 200, 7890.87);

// accessing value of private variable
console.log(hn.carColor);                  // parentheses () not required to call a getter method (which can be treated as a variable call),                    prints "White" in web compiler
console.log('\n===============================');

// accessing value of protected variable
console.log(hn.carSpeed);                  // parentheses () not required to call a getter method (which can be treated as a variable call),                    prints "200" in web compiler
console.log('\n===============================');

// public variable can be used outside class also without the need of any specific fn as it is "Public"
console.log('The price of the honda car is', hn.price);         // prints The price of the honda car is 7890.87





