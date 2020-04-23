/*  Tuple - is a data type which includes multiple values of different data types, it represents heterogenous collection of values.      

Difference with array: While array and list are mutable, means we can change their data value and modify their structures, a tuple is immutable. Like a static array, a tuple is fixed in size and that is why tuples are replacing array completely as they are more efficient in all parameters.
        */

// declaring typescript tuple in 2 ways, way 1 (a javscript array of mixed types is nothing but a typescript tuple declared without types)
let empDetails = [101, 'John', 50000];    // where these are empID, empName and empSal respectively

// way 2 (declaring properly with types - MOST PREFERRED):
// empDetails : [number, string, number] = [200, 'Shagird', 65000];        // can't re declare same tuple with let keyword as it will throw error hence freshly declared again new tuple using const keyword

const empDetails_1 : [number, string, number] = [200, 'Shagird', 65000];
console.log(empDetails_1);                  // prints [ 200, 'Shagird', 65000 ]

console.log('\n===========================================');

const empDetails_2 : [number, string, number, boolean] = [200, 'Shagird', 65000, true];     // declared 1 more data type
console.log(empDetails_2);

console.log('\n===========================================');


// access specific element from a tuple
console.log(empDetails_2[1]);                         // prints Shagird

console.log('\n===========================================');

// add elements to a tuple (concept same as that of array)
empDetails_2.push(false);                     // inserting only 1 element just like we do in array
empDetails_2.push(35, 'chalu');               // inserting 2 more with different types
console.log('after adding 3 new elements: ', empDetails_2);                      // prints after adding 3 new elements: [ 200, 'Shagird', 65000, true, false, 35, 'chalu' ]

console.log('\n===========================================');

// remove elements from a tuple
const last = empDetails_2.pop();
console.log('element removed is:', last);                  // prints element removed is : chalu
console.log('updated tuple is:', empDetails_2);        // prints updated tuple is : [ 200, 'Shagird', 65000, true, false, 35 ]

console.log('\n===========================================');

// update elements from a tuple (via index)
const empDetails_3 : [number, string, string] = [123, 'london', 'dreams'];
empDetails_3[1] = 'sky';
console.log('element updated and tuple is now: ', empDetails_3);        // prints element updated and tuple is now: [123, 'sky', 'dreams']

console.log('\n===========================================');

// update elements from a tuple (via splice fn() )
empDetails_3.splice(1, 0, 'fyaar');                     // in index 1, add 1 element and don't remove any elements
console.log('element updated and tuple is now: ', empDetails_3); // prints element updated and tuple is now: [123, 'fyaar', 'sky', 'dreams']

console.log('\n===========================================');

empDetails_3.splice(1, 1, 'bond', 'james');         // in index 1, add 1 element and remove 1 element from index 1
console.log('element updated and tuple is now: ', empDetails_3); // prints element updated and tuple is now: [123, 'bond', 'james', 'sky', 'dreams']

console.log('\n===========================================');


// store multiple arrays in 1 Tuple or a Tuple array (2D Tuple)
let stu : [number, string] [];
stu = [ [6, 'rita'],    [9, 'sarah'],   [13, 'vesper']  ];      // we have to store in number, string order only otherwise it won't accept
console.log(stu);                      // prints [ [ 6, 'rita' ], [ 9, 'sarah' ], [ 13, 'vesper' ] ]

console.log('\n===========================================');
console.log(stu[1]);            // prints [ 9, 'sarah' ]
console.log(stu[1] [1]);        // prints sarah     

console.log('\n===========================================');

// using same concept of 2D array to extract and print each tuple elements separately using for of loop
for(const row of stu){
    for(const elem of row) console.log(elem);     // prints 6 rita 9 sarah 13 vesper (horizontal way)
}


