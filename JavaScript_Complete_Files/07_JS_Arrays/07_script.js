// creation of arrays
let array = [10,20,30,40,50];
console.log(array);

// Accessing an array and its properties
console.log(array[0]); // 10

// Access not existed property from an array
console.log(array[5]); // undefined

// Accessing length of an Array
console.log(`Length : ${array.length}`);

// Reverse the Elements
let technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

// Sort of an Array
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

// shift() -> removes an element from the front
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies); //['css','javascript','bootstrap']

// unShift() -> Adds an element to the front
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.unshift('node js');
console.log(technologies); //['node js','css','javascript','bootstrap']

// pop -> removes an element from the end of the array
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies); //['html','css','javascript']

// push -> Adds an element to the end the array
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.push('node js');
console.log(technologies); //['html','css','javascript','node js']

// splice -> Remove / Replace from the array
// Remove all the Elements splice(index)
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.splice(1);
console.log(technologies);

// Remove only specific element splice(index,nofElements)
technologies = ['html','css','javascript','bootstrap','node js'];
console.log(technologies);
technologies.splice(2,2);
console.log(technologies);

// Replace Only one element splice(index,1,replaceElement);
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
console.log('-----------splice-------');
technologies.splice(2,1,'Node JS');
console.log(technologies);

// Join -> joins all the elements of an Array to String
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
let techString = technologies.join(' * ');
console.log(techString);

// Split -> Splits a String to an Array
console.log(techString);
let newTech = techString.split(' * ');
console.log(newTech);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Normal For Loop
console.log('---------Normal for loop---------');
technologies = ['html','css','javascript','bootstrap'];
let output = '';
for(let i =0; i<=technologies.length-1; i++){
    output += `${technologies[i]} `;
}
console.log(output);

// For-in loop ES5 version
output = '';
for(let index in technologies){
    output += `${technologies[index]} `;
}
console.log(output);

// For-Of Loop ES6 version
output = '';
for(let element of technologies){
    output += `${element} `;
}
console.log(output);

// forEach Function ES5
output = '';
technologies.forEach(function(element) {
    output += `${element} `;
});
console.log(output);

// forEach Function ES6 Lambda / Arrow
output = '';
technologies.forEach(element => output += `${element} `);
console.log(output);

// Array of Objects
let customers = [
    {
        name : 'John',
        age : 40,
        desg:'Manager',
        isRegular : true
    },
    {
        name : 'Wilson',
        age : 34,
        desg:'Tech Lead',
        isRegular : false
    },
    {
        name : 'Rajan',
        age : 25,
        desg:'Software Engineer',
        isRegular : true
    },
    {
        name : 'Modi',
        age : 45,
        desg:'Sr.Manager',
        isRegular : false
    }
];
console.log(customers);
console.log(customers[3].name);

// Get all the Name of Customers
for(let customer of customers){
    console.log(customer.name);
}

// Regular Customers
let regularCustomers = [];
for(let customer of customers){
    if(customer.isRegular){
        regularCustomers.push(customer);
    }
}
console.log(regularCustomers);

// Filter Function of An Array
let seniorCustomers = customers.filter(function(customer) {
    return customer.age >= 35;
});
console.log(seniorCustomers);

// Junior Customers
let juniorCustomers = customers.filter(function(customer) {
    return customer.age < 35;
});
console.log(juniorCustomers);

// irregular Customer
let irregularCustomers = customers.filter(function(customer) {
    return !customer.isRegular;
});
console.log(irregularCustomers);