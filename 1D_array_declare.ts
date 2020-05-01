// A. number array declaration style
const nums1 : number[] = [1, 2, 3, 3]; 
const nums2 : Array<number> = [4, 1, 6, 6] ;

// B. string array declaration style
const fruits1 : string[] = ['Apple', 'Orange', 'Melon'];
const fruits2 : Array<string> = ['Dates', 'PineApple', 'Coconut'];

console.log(nums1);                 // prints [ 1, 2, 3, 3 ]
console.log(nums2);                 // prints [ 4, 1, 6, 6 ]

console.log(fruits1);               // prints [ 'Apple', 'Orange', 'Melon' ]
console.log(fruits2);               // prints [ 'Dates', 'PineApple', 'Coconut' ]


// printing number array using for-of and forEach loop
for(const elem of nums1) console.log(elem);             // prints 1 2 3 3 (vertical order)
console.log('\n=======================');
nums2.forEach(elem => console.log(elem) );               // prints 4 1 6 6 (vertical order)


// printing string array using for-in, for-of and forEach loop
for(const index in fruits1) console.log(fruits1[index]);        // prints Apple Orange Melon (vertical order) 
console.log('\n=======================');

for(const elem of fruits1.reverse() ) console.log(elem);             // prints Melon Orange Apple (vertical order) 
console.log('\n=======================');
fruits2.forEach(elem => console.log(elem) );                    // prints Dates PineApple Coconut


// B. Multi type array declaration style
const mArr1 : (string | number) [] = [1, 'soildier', 'hype'];
const mArr2 : Array<string | number> = ['luck', 100];

console.log(mArr1);                     // prints [ 1, 'soildier', 'hype' ]
console.log(mArr2);                     // prints [ 'luck', 100 ]

console.log(mArr1[2]);              // prints hype
console.log(mArr1[3]);              // prints undefined

