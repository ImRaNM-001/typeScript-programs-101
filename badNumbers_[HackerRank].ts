const badNumbers : number[] = [37, 7, 22, 15, 49, 60],
lower : number = 3, 
upper : number = 48; 

let arr : number[] = [],
fArr : number[];
const goodSegment = (badNumbers, lower, upper) : number =>{
    for(let num : number = lower;    num <= upper;   num++){
        arr.push(num);
    }       
    fArr = arr.filter(elem => ! badNumbers.includes(elem) )        
            .filter(elem => elem > 21 && elem < 38 );
    
    return fArr.length;               
};      

// calling the fn() with above commented values
console.log(goodSegment(badNumbers, lower, upper) );        // prints 14  
