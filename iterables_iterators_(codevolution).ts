/* my own typescript code with ES6 syntax,.....................iterable number array below       */

const itrArr : number[] = [11, 22, 33];

// creating a custom data type "" whose return type is "object"
type objType = {
    num : (number | undefined),
    bool : boolean
};

// an iterator fn() which implments next() method
const createItr = (arr : number[]) : objType =>{
    let count : number = 0;
    return{
        nxt(){
            return count < arr.length?
            {val : arr[count++], done : false}:      // 1st object
            {val : undefined, done : true};         // 2nd object
        }
    }
};

const itrObj = createItr(itrArr);

console.log(itrObj.next() );
console.log(itrObj.next() );
console.log(itrObj.next() );
console.log(itrObj.next() );



// javascript code with ES5 syntax (exact copy pasted from codevolution video)
const itrArr = [11, 22, 33];

function createItr(arr){
    let count = 0;
    return{
        nxt(){                              // or,           nxt : function(){
            return count < arr.length?
            {value : arr[count++], done : false}:
            {value : undefined, done : true};
        }
    }
}

// creating an object named "myItr"
const myItr = createItr(itrArr);        

console.log(myItr.next() );
console.log(myItr.next() );
console.log(myItr.next() );
console.log(myItr.next() );

