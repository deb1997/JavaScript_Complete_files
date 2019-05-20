// Example 1: Normal function
function add(a , b) {
    console.log(`Sum : ${a + b}`);
}
add(10,20);

// Example 2 : Function Expression
let sub = function(a , b) {
    console.log(`Sub : ${a - b}`);
};
sub(10,20);

// Example 3 : Arrow Function
let mul = (a , b) => console.log(`Mul : ${a * b}`);
mul(10,20);