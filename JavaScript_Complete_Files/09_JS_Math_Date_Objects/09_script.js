/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
let piValue = Math.PI;
console.log(`Pi Value : ${piValue}`);

// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`sqrt : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(45,78,1,2465,51,16,181,961,35,1654,65,13);
console.log(`Min : ${min}`);

// find the Max of 4 numbers
let max = Math.max(45,78,1,2465,51,16,181,961,35,1654,65,13);
console.log(`Max : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2,4);
console.log(`2 ^ 4 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let today = new Date();
console.log(today);

// Get proper date
let date = new Date().toLocaleDateString();
console.log(date);

// Get Proper Time
let time = `${today.getHours()} - ${today.getMinutes()} - ${today.getSeconds()}`;
console.log(time);

let properTime = today.toLocaleTimeString();
console.log(properTime);

// get full day of the week using switch statement
today = new Date().getDay();
let fullDay = '';
switch(today){
    case 0:
        fullDay = 'Sunday';
        break;
    case 1:
        fullDay = 'Monday';
        break;
    case 2:
        fullDay = 'Tuesday';
        break;
    case 3:
        fullDay = 'Wednesday';
        break;
    case 4:
        fullDay = 'Thursday';
        break;
    case 5:
        fullDay = 'Friday';
        break;
    case 6:
        fullDay = 'Saturday';
        break;
    default:
        fullDay = '';
        break;
}
console.log(`Today is : ${fullDay}`);

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let minNumber = Number.MIN_VALUE;
console.log(`MinNumber : ${minNumber}`);

let maxNumber = Number.MAX_VALUE;
console.log(`MaxValue : ${maxNumber}`);

let posInfinity = Number.POSITIVE_INFINITY;
console.log(posInfinity);

let negInfinity = Number.NEGATIVE_INFINITY;
console.log(negInfinity);

let num1 = 100;
console.log(`Value : ${num1} Type: ${typeof num1}`);

let str = num1.toString();
console.log(`Value : ${str} Type: ${typeof str}`);

let newStr = '100';
console.log(`Value : ${newStr} Type: ${typeof newStr}`);

let num2 = Number('100');
console.log(`Value : ${num2} Type: ${typeof num2}`);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let msg = 'Good Morning';

// Length
console.log(`Length : ${msg.length}`);

// uppercase
console.log(`${msg.toUpperCase()}`);

// lowercase
console.log(`${msg.toLowerCase()}`);

// substr
console.log(`${msg.substr(0,4)}`); // Good

// substr
console.log(`${msg.substr(5)}`); // Morning

// Char
console.log(`${msg.charAt(0)}`); // G

// CharCode
console.log(`${msg.charCodeAt(0)}`); // ASCII

// Example 1: Count the Number of Zeros
let theMsg = 'Good Morning';
let countZeros = (str) => {
    let count = 0;
    for(let i =0; i<=str.length-1; i++){
        let ch = str.charAt(i);
        if(ch === 'o' || ch === 'O'){
            count++;
        }
    }
    return count;
};
console.log(`Count : ${countZeros(theMsg)}`);

// Example 2: Reverse String
theMsg = 'Good Morning';
let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(reverseString(theMsg));

// Example 3: isPalindrome or Not
theMsg = 'ABA';
let isPalindrome = (str) => {
   return str === reverseString(str);
};
console.log(`is Palindrome ? ${isPalindrome(theMsg)}`);

// Example 4 : convert To Palindrome
theMsg = '12';
let convertToPalindrome = (str) => {
    let tempStr = str;
    for(let i=str.length-2; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(convertToPalindrome(theMsg));

// Example 5: Triangle One
theMsg = "NAVEEN SAGGAM";
let triangleOne = (str) => {
    let tempStr = '';
    for(let i=1; i<=str.length;i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleOne(theMsg));

// Example 6: Triangle Two
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=1; i<=number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};

theMsg = "NAVEEN SAGGAM";
let triangleTwo = (str) => {
    let tempStr = '';
    for(let i=0; i<=str.length-1;i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleTwo(theMsg));

// Example 7: Triangle Three
theMsg = "NAVEEN SAGGAM";
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=str.length;i>=1; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleThree(theMsg));

// Example 8: Triangle Four
theMsg = "NAVEEN SAGGAM";
let triangleFour = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleFour(theMsg));

// Example 9: Convert a Number to Word Number
let theNumber = "123";
let wordNumber = (theNumber) => {
    let tempStr = '';
    for(let i=0; i<=theNumber.length-1; i++){
        let digit = Number(theNumber.charAt(i));
        switch(digit){
            case 0:
                tempStr += ' ZERO ';
                break;
            case 1:
                tempStr += ' ONE ';
                break;
            case 2:
                tempStr += ' TWO ';
                break;
            case 3:
                tempStr += ' THREE ';
                break;
            case 4:
                tempStr += ' FOUR ';
                break;
            case 5:
                tempStr += ' FIVE ';
                break;
            case 6:
                tempStr += ' SIX ';
                break;
            case 7:
                tempStr += ' SEVEN ';
                break;
            case 8:
                tempStr += ' EIGHT ';
                break;
            case 9:
                tempStr += ' NINE ';
                break;
        }
    }
    return tempStr;
};
console.log(wordNumber(theNumber));

// Example 10 : displayWordNumber
theNumber = '123';
let numbers = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
let displayWordNumbers = (theNumber) => {
    let tempStr = '';
    for(let i=0; i<=theNumber.length-1; i++){
        let digit = Number(theNumber.charAt(i));
        tempStr += ` ${numbers[digit]} `;
    }
    return tempStr;
};
console.log(displayWordNumbers(theNumber));

// Example 11 : palindromeWord
theNumber= '123';
let palindromeWord = (theNumber) => {
    return displayWordNumbers(convertToPalindrome(theNumber));
};
console.log(palindromeWord(theNumber));


