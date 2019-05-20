// Assignment operator =
let num = 10;
console.log(num);

// Arithmetic operators + - * / , %
let num1 = 10;
let num2 = 20;
console.log(`Addition : ${num1 + num2}`);
console.log(`Subtraction : ${num1 - num2}`);
console.log(`Multiplication : ${num1 * num2}`);
console.log(`division : ${num1 / num2}`);

// even or Odd
if(num1 % 2 === 0){
    console.log(` ${num1} is Even Number`);
}
else{
    console.log(` ${num1} is Odd Number`);
}

// Short hand math += , -= , *= , /=
let a = 10;
let b = 20;
let sum = 0;
sum = sum + (a + b); // 0 + 10 + 20 = 30
sum += (a + b); // 30 + 10 + 20 = 60
console.log(sum); // 60

// Conditional operators < , > , <= , >= , !=
let age = 25;
if(age >= 18){
    console.log('You are Major');
}
else{
    console.log('You are Minor');
}

// Unary Operator ++ , -- (pre , post)
let x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);

// Logical operators AND , OR
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until the parents Agreed');
}

// String Concatenation Operator
let name = 'John';
age = 40;
console.log(name + " " + age);
console.log(`${name} ${age}`);

// Ternary operator (? :)
age = 15;
let message = '';
(age >= 18) ? message = 'You are Major' :  message = 'You are Minor';
console.log(message);

// Type of operator
let abc = 100;
console.log(`Value : ${abc} Type : ${typeof abc}`);

// == operator
a = 10;
b = '10';
if(a == b){
    console.log('both are Equal');
}
else{
    console.log('both are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('both are Equal');
}
else{
    console.log('both are NOT Equal');
}