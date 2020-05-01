// NEED to separate code later into multiple files

// testing number data types
let nu : number;

// negative integer
nu = -22;
console.log(nu);     // prints -22

// expression
nu = 5 /10;
console.log(nu);     // prints 0.5

// decimal (already did on built_in_types(SDET).ts )
nu = 7.8643;
console.log(nu);         // prints 7.8643

// hexadecimal (already did on built_in_types(SDET).ts )
nu = 0xf00d;
console.log(nu);     // prints 61453 

// slicing a string (just like arr.slice() fn)
let st : string;
st = 'Hello';
console.log(st.slice(0,3) );     // prints Hel   (starts from oth index and picks till 2)

// trying brad's example of inserting more elements in a Tuple corresponding to the respective data types
let tu : [string, number];
tu = ['Hello', 5];       
console.log(tu);            // prints [ 'Hello', 5 ]

// below code fails and prints error Type '[string, number, number]' is not assignable to type '[string, number]'.
/*  tu = ['Hello', 5, 7];    
console.log(tu);                 */

// understanding void data type
let vd : void = null;
console.log(vd);            // prints null

vd = undefined;
console.log(vd);            // prints undefined

// myVoid = 1;
// console.log(myVoid);            // prints an error  "Type '1' is not assignable to type 'void'."

// null and undefined
let nl : null = undefined;  
console.log(nl);            // prints undefined
nl = null;
console.log(nl);            // prints null

let ud : undefined = null;
console.log(ud);                // prints null
ud = undefined;
console.log(ud);                // prints undefined                

// use of fns()
const sum = (num1 : any, num2 : any) : number =>{
    if(typeof num1 === 'string') num1 = parseInt(num1);         // parseInt() pulls a number from a string if string starts with a number
    if(typeof num2 === 'string') num2 = parseInt(num2);
    return num1 + num2;
}

console.log(sum('2', '45 Hello hello charlie') );        // prints 47
console.log(sum('2', 'Hello 45 hello charlie') );        // prints NaN               

// learning interfaces with objects traversy way
interface ITodo{

    // declared but un-initialized variables
    title : string;
    text : string;
}                     // interface closed      

// creating an object "obj" of interface "ITodo" type
const obj : ITodo = {
    title : 'Trash',
    text : 'take out this trash'
},

// below parameterized fn() looks implemented (concrete/complete) because it is written outside interface 
showToDo = (obj : ITodo) : string => obj.title + ': ' + obj.text;     // didn't used const as separated by comma

// calling the fn() whose argument is an object
console.log(showToDo(obj) );                 // prints Trash: take out this trash               

// calling console.log stmt inside class constructor
class User{
    name : string;
    age : number;

    constructor(name : string, age : number){
        this.name = name;      // this is nothing but refers to the class hence this.name refers to class global variable
        this.age = age;  

        // below print stmt will execute once a new class object is created
        console.log('New user created:', this.name);      
    }

    // 1st non-static method of parent class
    register() : void{
        console.log(this.name, 'is now registered');
    }

    // 2nd non-static method of parent class
    payInvoice() : void{
        console.log(this.name, 'paid invoice');        
    }
}

const br : User = new User('Brad', 42);  // runs console.log stmt inside constructor and prints New user created: Brad

// getting age of user
console.log(br.age);            // prints 42

// calling the void non-static method
br.register();                  // prints Brad is now registered

/* Few important notes told by him:
if global variables declared as private, then we can access them inside class only when printed inside a fn() or constructor (not outside with an object)

as public, above code will work as we can access public contents anywhere, just need to import the class post exporting it

as protected, we can't access variables outside class but from any other class which inherits "User" class (or)
when printed inside a fn() or constructor               

There is no default access modifier in TypeScript, everything is public by default      */

// finally explained inheritance
class StandardUser extends User{
    id : number;

    constructor(id : number, name : string, age : number){
        super(name, age);
        this.id = id;
    }

    // non-static method of child class
    payInvoice() : void{
        super.payInvoice();     // using "super" keyword to call parent class non-static method
    }
}

// creating a new class variable "su" of class type
const su : StandardUser = new StandardUser(11, 'sirJohn', 55);  // new object created called parent class constructor stmt and prints New user created: sirJohn

su.payInvoice();                    // prints sirJohn paid invoice












































































































