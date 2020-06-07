let a : number = 12, b : number = 10;

a = b;      // a becomes 10 now
console.log('a is now', a);             // prints a is now 10


a += b;      // a is 10 here 
console.log('a is now', a);            // prints a is now 20


a -= b;       // a is 20 here 
console.log('a is now', a);             // prints a is now 10


a *= b;      // a becomes 10 here
console.log('a is now', a);             // prints a is now 100



a /= b;      // a becomes 100 here
console.log('a is now', a);             // prints a is now 10


a %= b;      // a becomes 10 here
console.log('a is now', a);             // prints a is now 0


a **= b;      // a becomes 0 here
console.log('a is now', a);               // prints a is now 0