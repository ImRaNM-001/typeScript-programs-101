// using strictly ES6 standard:
let disp1 = (s1 : string) : void;
let disp1 = (n1 : number, s1 : string) : void;

/* below are samples how SDET just declared fns() in his "interface_withObjects.ts" video 
displayEmpData() : (string | number);       
displayEmpData : () => (string | number);                       */

let disp1 = (a1 : any, a2 ?: any) : void => console.log(a1, a2);

/*   tweaking disp1 fn() to exclude undefined (followed Brad Traversy video on typsecript)
let disp1 = (a1 : any, a2 ?: any) : void =>{
    if(a2 == undefined) return a1;     // here we are targetting value of a2 (which is undefined) not "typeof"
    else return a1 + ' ' + a2;              */

// calling the fn()     
disp1('sallu');
disp1(2, 'sanju');              


// runs fine with ES5 syntax
/* function disp1(s1 : string) : void;
function disp1(n1 : number, s1 : string) : void;

function disp1(a1 : any, a2? : string) : void{
    console.log(a1, a2);
    // console.log(a2);
}

disp1('sallu');                 // prints sallu undefined (same line)
console.log('\n========================');

disp1(1, 'sanju');          // prints 1 sanju (same line)                   */






















