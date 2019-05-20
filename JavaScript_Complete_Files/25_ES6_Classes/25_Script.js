class Employee {
    // special function to create an Object
    constructor(empName,age,designation){
        this.empName = empName;
        this.age = age;
        this.designation = designation;
    }

    // Method
    printEmployee(){
        let theEmployee = `Emp Name : ${this.empName}
                           Emp Age : ${this.age}
                           Emp Designation : ${this.designation}`;
        console.log(theEmployee);
    }
}

// Object Creation
let employee1 = new Employee('John',45,'Manager');
employee1.printEmployee();

let employee2 = new Employee('Wilson',35,'Tech Lead');
employee2.printEmployee();