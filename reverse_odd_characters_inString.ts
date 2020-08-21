/* found in HackerRank test on 12-Jul-2020..........way1 (using traditional for loop and void return type....WORKS PERFECTLY FINE)

const oddCharacterReverse = (givenString : string) : void =>{
    const arr : string[] = givenString.split(' ');    
    for(let index : number = 0;  index < arr.length; index++){
        if(arr[index].length % 2 != 0){
            // const a2 : string[] = arr[index].split('').reverse(),
            // reversedString : string = a2.join('');
            // console.log(reversedString);       

            console.log(arr[index].split('').reverse().join('') );      // simply hit in 1 line instead of above three
        }       
    else if(arr[index].length % 2 == 0) console.log(arr[index]);
    }
};

oddCharacterReverse('taste the thunder ludo');                       // prints etsat eht rednuht ludo (vertical lines)          */


// way2 (simplified/shorten the code using for-of loop and void return type....WORKS PERFECTLY FINE)
const oddCharacterReverse = (givenString : string) : void =>{
const arr : string[] = givenString.split(' ');       
for(const elem of arr){
    if(elem.length % 2 != 0) console.log(elem.split('').reverse().join('') );
    else if(elem.length % 2 == 0) console.log(elem);
    }
};          

oddCharacterReverse('taste the thunder ludo');              // prints etsat eht rednuht ludo (vertical lines) 


// way3 (using for-of loop and proper 'return' statement..........but is printing only 'etsat' hence i need to work to make it work)
const oddCharacterReverse = (givenString : string) : string =>{
const arr : string[] = givenString.split(' ');
let elem : string;                   // declared elem as 'string' explicitly
for(elem of arr){
    if(elem.length % 2 != 0) return elem.split('').reverse().join('');
    else if(elem.length % 2 == 0) return elem;
    }
};          

console.log(oddCharacterReverse('taste the thunder ludo') );



/* use of "process.stdin" as found in HackerRank for this question

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function(chunk) {
    input+= chunk;
});

process.stdin.on("end", function() {
   // now we can read/parse input
   
   oddCharacterReverse(input);      // we call our fn() here
});


===========taken from StackOverFlow===================
function processThis(input) {
  console.log(input);               //your code goes here
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
   processThis(_input);             // calling the actual fn() where code is written    
});         */