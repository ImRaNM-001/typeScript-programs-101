// 1. technique for not declaring any global variables inside class (******most shortest way)
class PersonP{
    
    // not declaring any global variables as i have made them private inside constructor
    constructor(private name : string, private age : number){}

    // get method() can have return statement but cannot have parameters as we call it without paranthesis ()
    get speak2() : (string | number){
        return this.name + ' ' + this.age + ' speaking';
    }
}

const p11 : PersonP = new PersonP('Guddu', 30),     
p22 : PersonP = new PersonP('Rangeela', 40);

console.log(p11.speak2 );                            // prints Guddu 30 speaking
console.log(p22.speak2 );                             // prints Rangeela 40 speaking

console.log('\n===========================');


// 2. long code (i later discovered way 1)
class PersonA{

    // not declaring any global variables as i have made them public inside constructor
    constructor(public name : string, public age : number){
        this.name = name;
        this.age = age;
    }

    // copy pasted video creator's way of writing fn() and commented
    speak1() : void{
        console.log(this.name, this.age, 'speaking');        
    }

    // Imran's way of writing a fn() using "return" statement
    speak2() : (string | number){
        return this.name + ' ' + this.age + ' speaking';
    }
}

const p1 : PersonA = new PersonA('Guddu', 30),
p2 : PersonA = new PersonA('Rangeela', 40);

// calling video creator's fn()
p1.speak1();                // prints Guddu 30 speaking
p2.speak1();                // prints Rangeela 40 speaking
console.log('\n===========================');

// calling my preferred fn()
console.log(p1.speak2() );          // prints Guddu 30 speaking
console.log(p2.speak2() );          // prints Rangeela 40 speaking
console.log('\n===========================');


// 2. understanding "readonly" and "static" keyword
class PersonB{
    readonly habit : string;
    static hands : number = 2;      // if not initialized here, then initialize with classname outside class

    constructor(habit : string){
        this.habit = habit;          
    }

    does(){
        this.habit = '';        // at this line it will throw error as "habit" variable is readonly, cannot be re-initialized
    }

    static clap(){
        return PersonB.hands;
    }
}

console.log(PersonB.clap() );               // prints 2


























