// Hierarchical inheritance (means 1 parent class can have multiple child classes)
class Bank{
    rate : number = 10;

    rateOfInt() : number{
        return this.rate;       // note: non-static variable name and non-static method name cannot be same otherwise compiler will get confuse thnking we are calling same method using "this" keyword inside same method
    }
}

// 1st child class Sbi
class Sbi extends Bank{     

    // overriding parent class method rateOfInt(), just the body and not the name or it's properties
    rateOfInt() : number{
        return 5;
    }
}

// 2nd child class Hdfc
class Hdfc extends Bank{

    // overriding parent class method rateOfInt(), just the body and not the name or it's properties
    rateOfInt() : number{
        return 6.5;
    }
}       

// creating object for Sbi class
const sb : Sbi = new Sbi();
console.log(sb.rateOfInt() );                   // prints 5

console.log('\n================');

// creating object for Hdfc class
const hf : Hdfc = new Hdfc();
console.log(hf.rateOfInt() );                   // prints 6.5