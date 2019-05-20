    // var vs let
let course = 'Engineering';
if(course === 'Engineering'){
    var job1 = 'Software';
    let job2 = 'Govt';
}
console.log(course); // Engineering
console.log(job1); // Software
// console.log(job2); // ReferenceError: job2 is not defined

// let vs const
let empName = 'John';
const empId = 145256;

// We can change the variable with 'let'
empName = 'Wilson';
console.log(empName);

// we cannot change the variable with 'const'
// empId = 65464 // TypeError: Assignment to constant variable.

// const keyword with Object
const student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
};

// we can change the object data even if it is 'const'
student.name = 'Mahesh';
console.log(student);

