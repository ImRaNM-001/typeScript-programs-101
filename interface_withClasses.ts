/* Note: unlike Java, we can't do multiple inheritance in TypeScript like 1 class implments multiple interfaces....we have to extend 1 interface separately as below.                */

interface In1{
    i1 : number;
    j1 : number;

    add() : number;
    add : () => number;     // or ES6 way, not required to comment.....compiler takes only 1
}

interface In2 extends In1{
    i2 : number;
    j2 : number;

    subtract() : number;
    subtract : () => number;   // or ES6 way, not required to comment.....compiler takes only 1     
}

class Chalu implements In2{

    // as taught by SDET, we need to re-write all variable declarations in class again unlike Java
    i1 : number;
    j1 : number;        
    i2 : number;
    j2 : number;

    // now implementing both methods
    add() : number{
        return this.i1 + this.j1;
    }

    subtract() : number{
        return this.i2 - this.j2;
    }

    /* or ES6 way (i need to learn how to write fat arrow fns() inside TS class)
    add : number = () => this.i1 + this.j1;
    subtract : number = () => this.i2 - this.j2;

    super.add() : number => this.i1 + this.j1;
    super.subtract() : number => this.i2 - this.j2;                 */

    // creating constructor to initialize the values easily rather than using any setMethod or any object variables initialization outside class, constructor can be written at last also (No Issues)
     constructor(i1 : number, j1 : number, i2 : number, j2 : number){
        this.i1 = i1;
        this.i2 = i2;       

        this.j1 = j1;       
        this.j2 = j2;
    }
}

const cl_ : Chalu = new Chalu(4, 10, 20, 5);

// calling add fn()
console.log(cl_.add() );                // prints 14
console.log('\n==================');

// calling subtract fn()
console.log(cl_.subtract() );           // prints 15



