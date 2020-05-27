// the video name is "Object Oriented vs Functional Programming with TypeScript" uploaded 14-Dec-2018, there were so many parts he wrote code out of sarcasm but i only understood below ones which i captured.

// 1- "static" fn() to return a number
class Emoji{
    static addOne(val) : (number | string){
        return val + 1;
    }
}
console.log(Emoji.addOne(false));


// 2- fn within a fn()..........code is erroneous and doesn't compile
const hasName = (name : string) : string => name,

canSayHi = (name : string) : string =>{
    return{
        sayHi : () : string => `Hello , ${name}`;
    }
},

person = (name : string) =>{
    return{
        hasName(name);
        canSayHi(name);
    }
}

const p1 = person('Samrat');
console.log(p1.sayHi() );





















