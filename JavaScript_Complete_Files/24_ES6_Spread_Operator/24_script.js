// Spread Operator (...) ES6

// Example 1 :
let numbers = [787,1024,54,32,4,78,98,55,654,1,874];
let min = numbers[0];
for(let number of numbers){
    if(number < min){
        min = number;
    }
}
console.log(`Min : ${min}`);

// Spread operator
numbers = [787,1024,54,32,4,78,98,55,654,1,874];
min = Math.min(...numbers);
console.log(`Min : ${min}`);

// Example 2 : user spread operator in the middle of an array
let array1 = [10,20,30,40];
let array2 = [...array1 , 50,60,70,80];
console.log(array2);

// Example 3 : Create a Copy of an Array slice()
let arr1 = ['html','css','javascript'];
let arr2 = arr1.slice();
arr2 = [...arr1];
console.log(arr2);

