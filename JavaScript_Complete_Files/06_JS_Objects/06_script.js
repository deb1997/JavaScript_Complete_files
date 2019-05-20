// Create an Empty Object
let fridge = {};
console.log(fridge);

// Add properties to an Object
fridge.veg = 'Tomotos';
fridge.eggs = 25;
console.log(fridge);

// Create an Object Literal
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000,
    isInsured : false
};
console.log(mobile);

// Access the Properties dot , []
console.log(`Brand : ${mobile.brand}`);
console.log(`Brand : ${mobile['brand']}`);

// Access the non Existing property
console.log(`Memory : ${mobile.memory}`);

// Nested Object
let student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    college : {
        name : 'JNTUK',
        location : 'Kakinada'
    },
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);

// Access the Nested Object
console.log(student.college);

// add New to nested Object
student.address.street = 'Ameerpet';
console.log(student.address);

// Update the Street to SR Nagar
student.address.street = 'SR Nagar';
console.log(student.address);

// Delete College Object
console.log(student);
delete student.college;
console.log(student);