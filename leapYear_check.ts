// way 1 - using return statement and returing a value
const mg1 : string = 'Is a leap year',
mg2 : string = 'Not a leap year',

leapYr = (year : number) : string =>{
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0) return mg1;           // 3rd if closed
            else return mg2;
        }      // 2nd if closed
        else return mg1;
    }       // 1st if closed
    else return mg2;
};       // fn() closed

console.log(leapYr(2020) );     // prints Is a leap year
console.log(leapYr(1900) );     // prints NOT a leap year