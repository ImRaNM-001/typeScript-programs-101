class Shape{
    
    draw(nos : number) : number{
         return nos + 30;
    }
}

class Square extends Shape{     

    draw(nos: number) : number;       // we cannot implement overridden function of parent/super/base class in child/sub/dervied class
    draw(str : string) : string;      

    draw(overLoad : any) : any{
        return 'Achieved function overloading in ' + overLoad;
    }
}
const sq : Square = new Square();            
console.log(sq.draw('TypeScript') );                // prints Achieved function overloading in TypeScript



/*
Important Note: function overloading with different number of parameters and types with same name not supported in typescript unlike other programming languages like Java (hence below code won't work), tried to modify a Typescript version of function overloading from SDET video "Part 19- OOPS - Polymorphism in JavaScript"

'use strict';
export{};

class Shape{
    
    draw() : string{
        return 'I am generic shape';
    }
}           

class Square extends Shape{
    // overLoad : string;           
    // on : number;

    draw() : string{
        return 'I am zero argument method of square class';
    }
    
    draw(overLoad : string) : string{       
        return 'trying to perform method overloading ' + overLoad;
    }          
}
const sq = new Square();            
console.log(sq.draw('luck') );                               */







