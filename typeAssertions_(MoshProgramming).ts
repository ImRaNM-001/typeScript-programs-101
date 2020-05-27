// creating a variable of type "any" by compiler
let msg;
msg = 'Humraaz';        // now typeof msg is "string"

// way 1 of performing type assertion
let way1 = (<string>msg).endsWith('z');
console.log(way1);                          // prints true


// way 2 of performing type assertion
let way2 = (msg as string).endsWith('z');
console.log(way2);                          // prints true







