// total 4 (QNo: 4, 5, 9, 11) coding questions with the most easiest logic

//QNo:4 Given a string, reverse it........way1 (very easy way)
/*const rev = (str : string) : string =>{
    return str.split('').reverse().join('');
};

console.log(rev('dhoni') );				// prints inohd

//way2: using a Decrementing for Loop
const rev = (str : string) : string =>{
    let convStr : string = '';
    for(let index : number = str.length-1;   index >=0;  index--) convStr += str[index];
    return convStr;
};

console.log(rev('dhoni') );				// prints inohd


//QNo:5 Given a string capitalize 1st letter of 1st word try to do using charAt(i)
const cap = (str : string) : string =>{
  return str.toLowerCase()
        .split(' ')	// spaces with delimiter white-space
        .map(elem => elem.charAt(0).toUpperCase() + elem.slice(1) )     	// we can also write  elem.substring(1) both works fine 
        .join(' ');
};

console.log(cap('the quick broWn foX') );			// prints The Quick Brown Fox


//QNo:9 Print the duplicate elements of an array along with their count
//soln1 (SHORTEST Code, looks similar to soln4)
const arr : number [] = [1, 2, 2, 3, 3, 3, 4, 4];
let obj = {};

arr.forEach(elem =>{
obj[elem] = (obj[elem] || 0) + 1) ;     
});

// // console.log(obj);			// waste line hence commented
for(const key in obj) console.log(key, 'is repeated -------->', obj[key], 'times');     // prints 	{1: 1, 2: 2, 3: 3, 4: 2}    
console.log('\n----------------------------------------');


//soln2 (2nd favorite........works perfectly for all data types,  looks similar to soln3)    
const arr : (number | string)[] = ["a", "b", "a", "z", "e", "a", "b", "f", "d", "f"];
arr.sort();
let count : number = 1;

for(let index1 : number = 0; index1 < arr.length; index1 += count){     // here JS takes the sorted array
  count = 1;
  for(let index2 : number = index1 + 1; index2 < arr.length; index2++){
    if (arr[index1] === arr[index2]) count++;
  }
  console.log(arr[index1] + " appears -----> " + count + " times");
}
console.log('\n----------------------------------------');

// //soln3 (looks similar to soln2)
const arr : (number | string)[] = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];

// collecting only unique items from the array
let uniqueArr : (number | string)[] = [];

// iterate through each item of arr
for(const elem of arr){
  if(uniqueArr.indexOf(elem) == -1) uniqueArr.push(elem);   	// if there is an item that was not earlier in arr, put it into the uniqueArr array 
}

// after iterating through all arr take each item in uniqueArr and compare it with each item in arr. If item in uniqueArr corresponds to an item in arr, increase letterAccumulator by 1.
for(const elem1 of uniqueArr){
  let letterAccumulator : number = 0;
  for(const elem of arr){
    if(elem == elem1) letterAccumulator++;
  }
  console.log(`${elem1} is repeated ${letterAccumulator} times`);
}
console.log('\n----------------------------------------');


// //soln4 (2nd favorite........works perfectly for all data types, looks similar to soln1)
const elementRepeated = (arr : (number | string)[] ) : void =>{
	const obj = {};
	for(const elem of arr){
		if(elem in obj) obj[elem] = obj[elem] + 1;
		else obj[elem] = 1;
	}

	for(const key in obj) console.log(key, 'is repeated -------->', obj[key], 'times');
};

// calling the fn()     
elementRepeated(['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a', 66, 66]);
console.log('\n----------------------------------------');


// //soln5 (bit difficult soln compared to soln4, hence tend to ignore this)
const elementRepeated = (arr : (number | string)[] ) : void =>{
	const uniqueArr : (number | string)[] = [...new Set(arr)]     	// uniqueArr is [ [valX, uniqueArr], [valY, uniqueArr], [valZ, uniqueArr]... ];
                .map(val => [val, arr.join('').split(val).length - 1] );

	for(const elem of uniqueArr)	console.log(`${elem[0]} is repeated --------> ${elem[1]} times`);
}

elementRepeated(['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a', 77, 77]);
console.log('\n----------------------------------------');


// //soln6 (bekar soln, output works good for string ONLY not perfect for other data types)
const arr : (number | string | boolean)[] = [1, 2, 2, 3, 'ch', 'jkak', 'ch', true, true];
arr.sort();

let value = null, count : number = 0;
for(let elem of arr){
	if(elem != value){
	if(count > 0) console.log(value, 'is repeated', count, 'times');
	
	value = elem;		// this comes under 1st if loop
	count = 1;
	}
	else count++;
}

if(count > 0) console.log(value, 'is repeated', count, 'times');                        */












