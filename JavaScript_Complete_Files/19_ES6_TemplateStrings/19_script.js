let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager',
    company : 'Infosys'
};

let tableBody = document.querySelector('#table-body');

// String Concatenation Operator ES5
let theHTMLString = "<tr>" +
                        "<td>" + employee.name + "</td>" +
                        "<td>" + employee.age + "</td>" +
                        "<td>" + employee.designation + "</td>" +
                        "<td>" + employee.company + "</td>" +
                    "</tr>";
// Template String
let templateString = `<tr>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.designation}</td>
                        <td>${employee.company}</td>
                      </tr>`;

tableBody.innerHTML = templateString;

// ES6 Default Parameters
let printEmployee = (name , age = 20) => {
    console.log(`Hello ${name} You are ${age} yrs Old!`);
};
printEmployee('John');