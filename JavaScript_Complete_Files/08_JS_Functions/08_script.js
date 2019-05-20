// Prepare chicken Meal

// glass bowl
function glassBowl(rawChicken,masala) {
    // Mixing Logic
    let marinatedChicken = `(mixed : ${rawChicken} + ${masala})`;
    return marinatedChicken;
}

// cooking Bowl
function cookingBowl(marinatedChicken,water) {
    // Cooking Logic
    let cookedChicken = `(Cooked : ${marinatedChicken} + ${water})`;
    return cookedChicken;
}

// eating Plate
function eatingPlate(cookedChicken,rice) {
    // Eating Logic
    let chickenMeal = `(Eating ${cookedChicken} + ${rice})`;
    console.log(chickenMeal);
}

let rawChicken = '3kg chicken';
let masala = 'pepper - garlic - chilli';
let marinatedChicken = glassBowl(rawChicken,masala);
let water = '2l Water';
let cookedChicken = cookingBowl(marinatedChicken,water);
let rice = '1 kg rice';
eatingPlate(cookedChicken,rice);

// Functions without any parameter
function wish(){
    console.log('Good Morning');
}
wish();

// Functions with parameters
function wishMe(name){
    console.log(`Good Morning ${name}`);
}
wishMe('John');
wishMe('Wilson');
wishMe('ABC');

// Function with more Arguments
function calculate(a , b, calType){
    let result = 0;
    if(calType === 'sum'){
        return a + b;
    }
    else if(calType === 'mul'){
        return a * b;
    }
    else if(calType === 'sub'){
        return a - b;
    }
    else if(calType === 'div'){
        return a / b;
    }
    else{
        return "Please provide a valid CalType";
    }
}
let result = calculate(10,20,'sub');
console.log(result);

// Objects as Parameters
let employee = {
    name : 'John',
    age : 45,
    designation : 'Manager',
    salary : 225000
};
// Function Expression
let printEmployee = function(employee) {
    console.log(`Name : ${employee.name}
                 Age : ${employee.age}
                 Desg : ${employee.designation}
                 Salary : ${employee.salary}`);
};
printEmployee(employee);

// Array as a Function Parameter
let technologies = ['html','css','JavaScript','Boostrap'];

let printArrayLength = function(technologies) {
    for(let tech of technologies){
        console.log(`${tech.toUpperCase()} -> ${tech.length}`);
    }
};

printArrayLength(technologies);

// function itself as a parameter
let callRajan = function() {
    console.log('Hello Iam Rajan');
};
let callJohn = function() {
  console.log('Helo Iam John');
};

let helperFn = function(fName) {
    fName();
};
console.log(callRajan);
helperFn(callRajan);
helperFn(function() {
    console.log('Hello Iam Wilson');
});

// Lamda Expression / Arrow Function ES6

// Normal Function
function sayGoodMorning1() {
    console.log('Good Morning - 1');
}
sayGoodMorning1();

// function Expression
let sayGoodMorning2 = function() {
    console.log('Good Morning - 2');
};
sayGoodMorning2();

// Arrow Function
let sayGoodMorning3 = () => {
    console.log('Good Morning - 3');
};
sayGoodMorning3();

// Addition
let add = (a , b) => {
    return a + b;
};
console.log(add(10,20));

// Function inside an object
// Function inside another function => Nested Functions



