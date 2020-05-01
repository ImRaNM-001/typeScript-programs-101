/* There are 3 approaches (as taught by SDET in TypeScript video 12) to initialize variables (matlab assigning a value to a variable)

    1. using constructor (mostly used, preferred way)
    2. using custom non-static methods created inside class
    3. 3. using object variables (has to be done outside class only)            */

class Employee{
    empName : string;
    empID : number;
    deptNo : number;

    // 1. using constructor
    constructor(empName : string, empID : number, deptNo : number){
    // unlike Java (where "this" keyword is not required if global and local variable of a constructor have different name), in JS and TS we must have to write "this" to denote global variables inside constructor irrespective of different names
        this.empName = empName; 
        this.empID = empID;
        this.deptNo = deptNo;
    }           

    // non-static void method as it is not returning anything, hence written print stmt inside it
    display() : void{
        console.log(this.empName, this.empID, this.deptNo);        
    }
    
    // non-static method with return type as it is returning something in both string and number type, hence written return stmt inside it
    displayRt() : (string | number){
        return this.empName + ' ' + this.empID + ' ' + this.deptNo;          
    }           

    // 2. using custom non-static methods created inside class
    setEmpDetails(empName : string, empID : number, deptNo : number) : void{
        this.empName = empName;   
        this.empID = empID;
        this.deptNo = deptNo;
    }
}                            // class closed here


// implementing way 1: constructor
const emp1 : Employee = new Employee('Aryan', 1277, 76);

// calling void method with console stmt
emp1.display();                                     // prints Aryan 1277 76
console.log('\n===========================');

// calling return type method with return keyword
console.log(emp1.displayRt() );                     // prints Aryan 1277 76
console.log('\n===========================');

// implementing way 2: making use of custom non-static methods created inside class
emp1.setEmpDetails('Kabir', 09876, 34);

// calling void method with console stmt
emp1.display();                                          // prints Kabir 9876 34


// 3. using object variables (has to be done outside class only)....run this code by commenting constructor and other codes to avoid errors
/* const emp2 = new Employee();         // commented to avoid clashing Errors with parameterized constructor
emp2.empName = 'Jai'; 
emp2.empID = 4568; 
emp2.deptNo = 82;           // note: we cannot write comma separated values (not accepted in JS, TS)

console.log('\n===========================');

emp2.display();                                       // prints Jai 4568 82
console.log('\n===========================');

// calling return type method with return keyword
console.log(emp2.displayRt() );                     // prints Jai 4568 82             */

