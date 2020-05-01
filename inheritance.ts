class Person{
    pName : string;

    constructor(pName : string){
        this.pName = pName;
    }
}

class Employee extends Person{
    empNo : number;

    constructor(pName : string, empNo : number){
        super(pName);
        this.empNo = empNo;
    }

    // method with return type
    empDetails() : (string | number){
        return this.pName + ' ' + this.empNo;
    }

    // method without return type
    empDetails1() : void{
        console.log(this.pName, this.empNo);
    }
}                                                // closed child class block

// creating child class object
const emp1 : Employee = new Employee('Vijay', 2346);

// calling return type method with return keyword
console.log(emp1.empDetails() );                    // prints Vijay 2346

console.log('\n===========================');

// calling void method with console stmt
emp1.empDetails1();                    // prints Vijay 2346





