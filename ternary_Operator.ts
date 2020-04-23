const x : number = 1200,
y : number = 200,

// naveen's way
z = x > y ? x : y;      // prints x i.e, 1200 if condition is true
console.log(z);         // prints 1200

// sdet way
x > y ? console.log('x is largest') : console.log('y is largest');      // prints x is largest








