const x : number = 1200,
y : number = 200,

// naveen's way
z : number = x > y ? x : y;    // even though number data type color is not blue but still it works without any errors
console.log(z);                  // prints x i.e, 1200 as condition is true

// sdet way
x > y ? console.log('x is largest') : console.log('y is largest');      // prints x is largest








