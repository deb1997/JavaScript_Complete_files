let numbers = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
let displayWordNumbers = (theNumber) => {
    let tempStr = '';
    for(let i=0; i<=theNumber.length-1; i++){
        let digit = Number(theNumber.charAt(i));
        tempStr += ` ${numbers[digit]} `;
    }
    return tempStr;
};

// Get the HTML Elements
let numberBox = document.querySelector('#number');
let displayTag = document.querySelector('#text-number');

numberBox.addEventListener('keyup',function() {
    let textEntered = numberBox.value;
    displayTag.textContent = displayWordNumbers(textEntered);
});