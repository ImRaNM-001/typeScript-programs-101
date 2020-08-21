// trying out Mukesh's Java String class methods() video:
const actual : string = 'welcome to selenium',
expected : string = 'Welcome to selenium';
let result : boolean;
        

// 1- startswith(), endswith() fn - exist in TypeScript but doesn't work due to library issues
result = actual.startsWith('welc');         
console.log('starting with welc is', result);                             // prints true
console.log('\n======================');

result = actual.endsWith('sele');                 // prints false as "sele" is not the last word
console.log('ending with sele is', result);
console.log('\n======================');

result = actual.endsWith('ium');                 // prints true as "ium" is not the last word
console.log('ending with ium is', result);
console.log('\n======================');

result = actual.endsWith('selenium');       // prints true
console.log('ending with selenium is', result);
console.log('\n======================');


/*  // 2- equals() and equalsIgnoreCase()- these are exclusive Java String class methods
result = actual.equals(expected);       
console.log(result);            // prints error TS2339: Property 'equals' does not exist on type 'string'.

result = actual.equalsIgnoreCase(expected);
console.log(result);            // prints error TS2339: Property 'equalsIgnoreCase' does not exist on type 'string'.        
 

// 3- contains()- this one is also an exclusive Java String class method         
result = actual.contains('nium');
console.log(result);         // prints error TS2339: Property 'contains' does not exist on type 'string'.               */


//4- spilt()
const str1 : string = 'selenium-hp-qtp-grid',           
toolNames : string[] = str1.split('-');

for(let index = 0;  index < toolNames.length; index++){
    console.log('value of', index, 'is', toolNames[index]);         // prints value of 0 is selenium value of 1 is hp value of 2 is qtp value of 3 is grid  (vertical lines)
    
    // intentionally not using .equalsIgnoreCase() fn as it is not a TypeScript fn()
    if(toolNames[index] == 'selenium'){
        console.log('Test Passed');             // prints value of 0 is selenium and Test Passed
        // break;                        // break stmt comes out of 'for loop'and doesn't execute further
    }
}


// understanding split() fn more to separate a string and remove unwanted characters
const stringFromWeb : string = '123$',
// need : string[] = str2.split('$').splice(0, 1);     // splice here meant start from oth index and remove 1 element
convertArr : string[] = stringFromWeb.split('$').slice(0, 1);     // slice here meant start from oth index and take the elements till 1st index but ignore 1st index

console.log(convertArr.join('') );        // means we are joining array ['123'] with delimitter no space and hence      prints 123



