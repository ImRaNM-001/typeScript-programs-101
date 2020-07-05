// Ex 1: single object with key value pair (taught by Maximilian from Academind).....way1
const person: {                 // note- colon (:) is not recognized by a JS file
    name : string,              
    age : number
} = {              // till here we have written the object type explicitly which if not written will be inferred by typescript
    name : 'kick',
    age : 40
};
console.log(person);          // prints { name: 'kick', age: 40 }
console.log(person.name);       // prints kick

console.log('\n======================');

// Ex 1: way 2 (easy way)
type perObj = {
    name : string,
    age : number
};

const personA : perObj = {
    name : 'kick',
    age : 40
};
console.log(personA);            // prints { name: 'kick', age: 40 }
console.log(personA.name);         // prints kick


// Ex 2: embedded object having key as an object (i wrote this on my own)
const car: {
    make : string,
    model : string,
    price : number,
    color : string,

    seats: {
        material : string,
        color : string
    }                               // closing seats child object here
} = {                               // closing car parent object here
        make: 'volvo',
        model: 's60',
        price: 42000,
        color: 'grey',

        seats: {
        material: 'leather',
        color: 'brown'
	}
};
console.log(car.price);                 // prints 42000
console.log(car.seats.color);           // prints brown



/*  It's JavaScript equivalent code (intentionally changed object name as car1 to avoid car conflicts)
const car1 = {                          
	make: 'volvo',
	model: 's60',
	price: 42000,
	color: 'grey',

	seats: {
		material: 'leather',
		color: 'brown'
	}
};                          */      


// Ex 3: from Maximilian's typescript beginner course of 3h duration (rather follow Ex 1 which is company standard)
const personS : object = {          
    name : 'samrat',
    age : 35
};
console.log(personS.name);            // prints samrat    (works fine in typescript playground web compiler)


        





