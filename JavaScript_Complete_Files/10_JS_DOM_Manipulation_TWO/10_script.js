// Example 1
let inputField1 = document.querySelector('#inputField-1');
let outputTag1 = document.querySelector('#output-1');
inputField1.addEventListener('keyup',function() {
    let textEntered = inputField1.value;
    outputTag1.textContent = countZeros(textEntered);
});


// Example 2
let inputField2 = document.querySelector('#inputField-2');
let outputTag2 = document.querySelector('#output-2');
inputField2.addEventListener('keyup',function() {
    let textEntered = inputField2.value;
    outputTag2.textContent = reverseString(textEntered);
});

// Example 3
let inputField3 = document.querySelector('#inputField-3');
let outputTag3 = document.querySelector('#output-3');
inputField3.addEventListener('keyup',function() {
    let textEntered = inputField3.value;
    outputTag3.textContent = isPalindrome(textEntered);
});

// Example 4
let inputField4 = document.querySelector('#inputField-4');
let outputTag4 = document.querySelector('#output-4');
inputField4.addEventListener('keyup',function() {
    let textEntered = inputField4.value;
    outputTag4.textContent = convertToPalindrome(textEntered);
});

// Example 5
let inputField5 = document.querySelector('#inputField-5');
let outputTag5 = document.querySelector('#output-5');
inputField5.addEventListener('keyup',function() {
    let textEntered = inputField5.value;
    outputTag5.textContent = triangleOne(textEntered);
});

// Example 6
let inputField6 = document.querySelector('#inputField-6');
let outputTag6 = document.querySelector('#output-6');
inputField6.addEventListener('keyup',function() {
    let textEntered = inputField6.value;
    outputTag6.textContent = triangleTwo(textEntered);
});

// Example 7
let inputField7 = document.querySelector('#inputField-7');
let outputTag7 = document.querySelector('#output-7');
inputField7.addEventListener('keyup',function() {
    let textEntered = inputField7.value;
    outputTag7.textContent = triangleThree(textEntered);
});

// Example 8
let inputField8 = document.querySelector('#inputField-8');
let outputTag8 = document.querySelector('#output-8');
inputField8.addEventListener('keyup',function() {
    let textEntered = inputField8.value;
    outputTag8.textContent = triangleFour(textEntered);
});

// Example 9
let inputField9 = document.querySelector('#inputField-9');
let outputTag9 = document.querySelector('#output-9');
inputField9.addEventListener('keyup',function() {
    let textEntered = inputField9.value;
    outputTag9.textContent = displayWordNumbers(textEntered);
});

// Example 10
let inputField10 = document.querySelector('#inputField-10');
let outputTag10 = document.querySelector('#output-10');
inputField10.addEventListener('keyup',function() {
    let textEntered = inputField10.value;
    outputTag10.textContent = palindromeWord(textEntered);
});