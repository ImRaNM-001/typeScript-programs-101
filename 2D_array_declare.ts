// A. Single type 2D array declaration style
const twoD_Srr : number [][] = [ [10, 20],  [3, 4], [51, 49] ];
console.log(twoD_Srr[2]);                   // prints [51, 49]
console.log(twoD_Srr[2] [1]);                // prints [49]
  
console.log('\n=======================');

// B. Multi type 2D array declaration style
const twoD_Mrr : (string | number) [][] = [ ['hi', 3], [9, 'super'], ['bala', 'joy'] ];
console.log(twoD_Mrr[0] [1]);           // prints 3
console.log(twoD_Mrr[1] [0]);           // prints 9
console.log(twoD_Mrr[2] [1]);           // prints joy

console.log('\n=======================');

// access each element of 2D array
// 1. via tradional for loop
for(let row = 0; row < twoD_Mrr.length;  row++){
    for(let col = 0; col < twoD_Mrr[row].length; col++) console.log(twoD_Mrr[row] [col] ); // prints hi 3 9 super bala joy (vertical order)   
}
console.log('\n=======================');

// 2. via for in loop
for(const row in twoD_Mrr){
    for(const col in twoD_Mrr[row]) console.log(twoD_Mrr[row] [col] );  // prints hi 3 9 super bala joy (vertical order)
}
console.log('\n=======================');


// 3. via for of loop
for(const row of twoD_Mrr){  
    for(const elem of row) console.log(elem);           // prints hi 3 9 super bala joy (vertical order)
}

console.log('\n------------------------------------------------');

// 4. via forEach loop
twoD_Mrr.forEach(row => {
    row.forEach(elem => console.log(elem) );            // prints hi 3 9 super bala joy (vertical order)
} );
