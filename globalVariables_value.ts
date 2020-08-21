class Global{

    // just declaring all primitives not initializing
    str : string;
    num : number;
    bool : boolean;
    nl : null;
    ud : undefined;
    vd : void;
    ay : any;
} 
// creating object for Global class
const gl : Global = new Global();      

// now printing all of them outside class
console.log(gl.str);                          // prints undefined
console.log(gl.num);                          // prints undefined
console.log(gl.bool);                         // prints undefined
console.log(gl.nl);                          // prints undefined
console.log(gl.ud);                          // prints undefined
console.log(gl.vd);                          // prints undefined
console.log(gl.ay);                          // prints undefined





