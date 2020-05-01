// 1- while loop, ex 1: printing 1 to 6
let i : number = 1;                  // can't use const here as i has to be incremented in line no 5
while(i < 7){
    console.log(i);                 // prints 1 2 3 4 5 6 (vertical order)
    i++;    
}

// ex 2: printing even nos (my way using if stmt)
while(i < 7){
    if(i % 2 === 0){
        console.log(i);                          // prints 2 4 6 (vertical order)
    }
    i++;    
}

console.log('\n=======================');

// ex 3: printing even nos (SDET way)
i = 2;
while(i < 7){
    console.log(i);                         // prints 2 4 6 (vertical order)
    i+=2;           
}

console.log('\n=======================');

// ex 4: print nos in descending order
i = 6;
while(i > 0){
    console.log(i);                     // prints 6 5 4 3 2 1 (vertical order)
    i--;    
}

console.log('\n=======================');

// 2- do while loop, ex 1: printing 1 to 6
i = 110;
do{
    console.log(i);                 // prints 110 regardless of the condition in while loop as it is do-while loop
    i++;    
}
while(i < 7);

console.log('\n=======================');          

// ex 2: printing even nos (my way using if stmt)
i = 1;
do{
    if(i % 2 === 0){
        console.log(i);
    }
    i++;
}
while(i < 7);


// ex 3: printing even nos (SDET way)
i = 2;
do{
    console.log(i);                             // prints 2 4 6 (vertical order)
    i+=2;    
}
while(i < 7);

console.log('\n=======================');

// ex 4: print nos in descending order
i = 6;
do{
    console.log(i);
    i--;    
}
while(i > 0);                         // prints 6 5 4 3 2 1 (vertical order)


// 3- for loop, ex 1: printing 1 to 6
for(let y : number = 1;  y < 7;  y++) console.log(y);                     // prints 6 5 4 3 2 1 (vertical order)

console.log('\n=======================');

// ex 2: checking multiple conditions using AND operator
for(let y : number = 3;  y < 5 && y < 17;  y++) console.log(y);             // prints 3 4 

console.log('\n=======================');       

// ex 3: printing even nos (my way using if stmt)
for(let y : number = 2; y < 7;  y++){
    if(y % 2 === 0) console.log(y);                   // prints 2 4 6 (vertical order)
}

console.log('\n=======================');       

// ex 4: printing even nos (SDET way)
for(let y : number = 2; y < 7;  y+=2) console.log(y);        // prints 2 4 6 (vertical order)


console.log('\n=======================');

// ex 5: print nos in descending order
for(let y : number = 6; y > 0;  y--) console.log(y);             // prints 6 5 4 3 2 1 (vertical order)

console.log('\n=======================');       


// 4- jumping statements (break, continue), ex 1: looped 21 to 100 but breaked at 27
for(let k : number = 21;    k < 101;    k++){
    if(k === 28) break;
    console.log(k);                                 // prints 21 22 23 24 25 26 27 (vertical order)     
}

console.log('\n======================='); 

// ex 2: using continue keyword to skip a particular number only (say 29)
for(let k : number = 21;    k < 31;    k++){
    if(k === 29) continue;
    console.log(k);                                 // prints 21 22 23 24 25 26 27 28 30 (vertical order), basically if stmt here plays the role of ignore statment     
}
console.log('\n======================='); 

// ex 3: using continue keyword to use < condition instead of an ===
for(let k : number = 21;    k < 31;    k++){
    if(k <= 27) continue;
    console.log(k);                                                 // prints 28 29 30 (vertical order)
}



