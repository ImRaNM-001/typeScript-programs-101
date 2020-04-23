
'use strict';
export{};

// modified from Javascript version of SDET video:
class Shape{
    
    draw() : string{
        return 'I am generic shape';
        // return a;
    }
}           

class Square extends Shape{
    // overLoad : string;           
    // on : number;

    draw() : string{
        return 'I am zero argument method of square class';
        // return a + 30;
    }
    
    draw(overLoad : string) : string{       
        return 'trying to perform method overloading ' + overLoad;
    }          


}
const sq = new Square();            
console.log(sq.draw('luck') );







