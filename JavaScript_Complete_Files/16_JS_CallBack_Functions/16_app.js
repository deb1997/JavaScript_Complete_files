let a = () => {
    console.log('Iam from A Function');
};

let b = (x) => {
    x();
    console.log('Iam from B Function');
};
b(a);

// Actual Callback Function
let sum = (a , b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculate = (a , b , callBack) => {
    return callBack(a , b);
};
console.log(calculate(10,20,sum));
console.log(calculate(10,20,mul));
console.log(calculate(10,20,(a , b) => {
    return a - b;
}));
console.log(calculate(10,20,(a , b) => {
    return a / b;
}));
