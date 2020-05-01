interface IEmployee{

    // declared but un-initialized variables
    empName : string;
    empId : number;
    empSal : number;

    // declared a non-concrete fn() without fn body
    displayEmpData() : (string | number);       

    // also can write ES6 way which is recommended to write in an interface (i found it weird to write)
    displayEmpData : () => (string | number);               // without commenting duplicate also, it works just fine
}          // interface closed here

 /*   wrong way of declaring, doesn't work   
    displayEmpData = () : (number | string);
    displayEmpData : (string | number) = (); 
    displayEmpData : (string | number) = () =>;   
    displayEmpData = () : (number | string) =>;                 */ 
    

// creating a new employee object whose data type is interface type (just like class type in java)
const emp1 : IEmployee = {

    // assigning values to variables (i.e, initialzing) in key value pairs
    empName : 'Ashfaq',
    empId : 565,            
    empSal : 95000,
    
    // implementing the method body (note: doesn't matter if we mistakenly interchange the data type order)
    displayEmpData() : (number | string){
        return this.empName + ' ' + this.empId + ' ' + this.empSal;
    }
}

// printing employee 1 name, age and salary
console.log('Employee 1 details are', emp1.empName, emp1.empId, 'and', emp1.empSal);       // prints Employee 1 details are Ashfaq 565 and 95000

console.log('\n==================');

// calling method displayEmpData
console.log(emp1.displayEmpData() );        // prints Ashfaq 565 95000










