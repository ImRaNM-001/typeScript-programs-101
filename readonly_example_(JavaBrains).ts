// ex 1: given in video
class Person{
    constructor(readonly name : string){}      // used "readonly" as an access modifier just like "private", "public"
}
const p1 : Person = new Person('Steve Rogers');
console.log(p1);                // prints   Person { name: 'Steve Rogers' }

// again we cannot re-initialize name with p1 object as below
// p1.name = 'Stark';              // not allowed, shows error on mouse hover "Cannot assign to 'name' because it is a read-only property"



// ex 2: given in "kodebot" video (same code i wrote in "publicVariables_accessModifiers(kodebot).ts" file).........understanding "readonly" and "static" keyword
class PersonB{
    readonly habit : string;
    static hands : number = 2;          // if not initialized here, then initialize with classname outside class

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
