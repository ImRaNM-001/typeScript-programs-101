// ex 1: object with 2 keys and values
const firstName : string = 'Aditi',
lastName : string = 'Singh',

person : objType = {
    firstName,
    lastName        
};

// creating a type for object although it is an optional activity
type objType = {
    stName : string,
    ndName : string
};

// now printing each names
console.log(person.firstName);   // prints Aditi    (works in TypeScript web compiler)                         
console.log(person.lastName);   // prints Singh    (works in TypeScript web compiler)                         


// ex 2: using object literal in a fn()
const createPerson = (fName : string, lName : string, age : number) : objType1 =>{
    const fulName = `${fName} ${lName}`;        // or fName + ' ' + lName;
    return{
        fName, lName, fulName,
        isSenior(){
            return age > 60;
        }
    }
};

type objType1 = {                   // declaring type at later part is also allowed for a fn()
    fName : string,
    lName : string,
    age : number
}

// calling the fn() and storing the output in a variable
const p1 : objType1 = createPerson('Sonia', 'Martin', '32');
console.log(p1.fName);                  // prints Sonia (works in TypeScript web compiler)  
console.log(p1.lName);                  // prints Martin (works in TypeScript web compiler)  
console.log(p1.fulName);                // prints Sonia Martin (works in TypeScript web compiler)  
console.log(p1.isSenior() );             // prints false (works in TypeScript web compiler)  

