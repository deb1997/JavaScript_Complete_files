let employee = {
    empName : 'Ram',
    age : 35,
    designation : 'Tech Lead',
    company : {
        companyName : 'Microsoft',
        city : 'Bangalore',
        state : 'Karnataka',
        country : 'India'
    }
};

// De-Structuring
let {empName , age , designation} = employee;
console.log(`Name : ${empName}
             Age : ${age}
             Designation : ${designation}`);

// De-Structuring
let {companyName ,city , state , country } = employee.company;
console.log(`Company Name : ${companyName}
             City : ${city}
             State : ${state}
             Country : ${country}`);