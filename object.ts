// single object with key value pair
const person: {
    name : string,              
    age : number
} = {
    name : 'kick',
    age : 40
};
console.log(person);          // prints { name: 'kick', age: 40 }
console.log(person.name);       // prints kick




// embedded object having key as an object
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



// it's JavaScript equivalent (intentionally changed object name as car1 to avoid car conflicts)
// const car1 = {                          
// 	make: 'volvo',
// 	model: 's60',
// 	price: 42000,
// 	color: 'grey',

// 	seats: {
// 		material: 'leather',
// 		color: 'brown'
// 	}
// };











