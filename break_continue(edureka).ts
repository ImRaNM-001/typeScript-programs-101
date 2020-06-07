// 1. break statement
let num1 : number = 1;
while(num1 <= 10){
    if(num1 % 5 === 0){
        console.log('The 1st multiple of 5 between 1 & 10 is', num1);     // prints The 1st multiple of 5 between 1 & 10 is: 5
        break;              // as soon it finds 5 is correct value, it breaks and comes out of the loop
    }
    num1++;
}


// 2. continue statement
let num2 : number = 0, countVal : number = 0;

for(num2 = 0;   num2 <= 10;  num2++){
    if(num2 % 2 === 0) continue;
    countVal++;
}
console.log('Count of odd values between 0 & 10 is', countVal);         // prints Count of odd values between 0 & 10 is 5





