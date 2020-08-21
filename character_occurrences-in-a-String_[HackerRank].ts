// way1: using split fn() and forEach loop
const getMax = (str : string) : string =>{
 let initialCount = 0, initialLetter = '';

  str.split('').forEach( (letter : string) =>{
    if(str.split(letter).length > initialCount){
        initialCount = str.split(letter).length;
        initialLetter = letter;
     }
  } );
  return initialLetter;
};

console.log('Repeated characters in this string are', getMax('abbbaacc') );           // prints Repeated characters in this string are a
console.log('Repeated characters in this string are', getMax('Hello World') );        // prints Repeated characters in this string are l

console.log('\n======================');


// way2: using regEx (i find this one's not reliable)
const str1 : string = 'abbbaacc',

count1 = (str1.match(/\a/g) || [] ).length;    // passing a VERY CAREFULLY in between /\ /g
console.log('Count of the character in the string using regEx is', count1);
console.log('\n======================');


// way3: (MOST EASIEST) using str.split().length-1 (also will work with any fn() )
const str2 : string = 'abbbaacc',
letter2 : string = 'c',                 // as there is no char in JS/TS, hence written letter defined as 'string'

count2 : number = str2.split(letter2).length - 1;
console.log('Count of the character in the string using str.split().length-1 is', count2);
console.log('\n======================');


// way4: using rest parameter and .filter() fn
const str3 : string = 'abbbaacc',
letter3 : string = 'b', 

count3 : number = [...str2].filter(elem => elem === letter3).length;      // converted str2 into array using rest parameter
console.log('Count of the character in the string using rest parameter and .filter() fn is', count3);