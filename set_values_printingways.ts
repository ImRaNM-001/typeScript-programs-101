// different ways of printing set values and entire set  (tested and works fine in TS playground web compiler)

const myArr : number[] = [2, 34, 8.8],
mySet = new Set(myArr);

// 1. printing entire set
console.log(mySet);                                   // prints       Set {2, 34, 8.8}
console.log('\n===========================');


// 2. printing 1st value of set only
console.log(mySet.values().next().value);           // prints  2
console.log('\n===========================');

// 3. printing each values via "for-of" loop
for(const val of mySet) console.log(val);           // prints  2 34 8.8 (in vertical lines)
console.log('\n===========================');

// 4. printing each values via "forEach" loop
mySet.forEach(val => console.log(val) );            // prints  2 34 8.8 (in vertical lines)
console.log('\n===========================');


// 5. printing each values via ".entries()" fn and "for-of" loop
for(const [key, value] of mySet.entries() ) console.log(key);       // prints  2 34 8.8 (in vertical lines)
console.log('\n===========================');

for(const [key, value] of mySet.entries() ) console.log(value);     // prints  2 34 8.8 (in vertical lines)......basically key and value are same in Set, hence same output

// for(const val of mySet.entries() ) console.log(val);     // prints [ 2, 2 ]  [ 34, 34 ]  [ 8.8, 8.8 ]  (vertical lines)


// also printing .entries() set
console.log(mySet.entries() );          // prints   SetIterator {2 => 2, 34 => 34, 8.8 => 8.8} in TS web compiler but [Set Entries] { [ 2, 2 ], [ 34, 34 ], [ 8.8, 8.8 ] }    in local vsCode output
console.log('\n===========================');


// 6. printing each values via "[Symbol.iterator]()" fn and "for-of" loop
const itr = mySet[Symbol.iterator]();
for(const val of itr) console.log(val);             // prints  2 34 8.8 (in vertical lines)
console.log('\n===========================');


// also printing iterator set
console.log(itr);                           // prints  SetIterator {  }   in TS web compiler but  [Set Iterator] { 2, 34, 8.8 }   in local vsCode output
console.log('\n===========================');


console.log(typeof itr);                // prints object

