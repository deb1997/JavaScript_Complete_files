let textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];
let originalTextElement = document.querySelector('#original-text');
let textAreaElement = document.querySelector('#text-area');
let minutesElement = document.querySelector('#minutes');
let secondsElement = document.querySelector('#seconds');
let resetButton = document.querySelector('#reset');
let congratsElement = document.querySelector('.cong-section');
let clapSound = document.querySelector('#clap-sound');
let congratsSound = document.querySelector('#congrats-sound');

let timer = 0;
let timerRunning = false;
let minutes = 0;
let seconds = 0;
let interval = 0;

// Keyup event for textArea
textAreaElement.addEventListener('keyup',function() {
    let textEnteredLength = textAreaElement.value.length;
    let originalText = originalTextElement.textContent;
    let textEntered = textAreaElement.value;
    let partialText = originalText.substr(0,textEntered.length);
    callTimer(textEnteredLength);
    evaluateText(originalText,textEntered,partialText);
});

// Click on Reset Button Logic
resetButton.addEventListener('click',function() {
   clearInterval(interval);
   clearFields();
   textAreaElement.value = '';
   applyColors('gray');
   minutesElement.textContent = '00';
   secondsElement.textContent = '00';
   congratsElement.style.display = 'none';
   generateRandomText();
});

// Evaluate Text
let evaluateText = (originalText,textEntered,partialText) => {
    console.log(textEntered);
    if(textEntered === ''){
        applyColors('gray');
    }
    else{
        if(textEntered === originalText){
            // green
            applyColors('seagreen');
            // Stop the Timer
            clearInterval(interval);
            // display Congrats Message
            congratsElement.style.display = 'block';
            // Play the sound
            congratsSound.play();
        }
        else{
            if(textEntered === partialText){
                // blue
                applyColors('lightblue');
            }
            else{
                // red
                applyColors('orangered');
                clapSound.play();
            }
        }
    }
};

// Call Timer
let callTimer = (textEnteredLength) => {
    if(textEnteredLength === 1 && !timerRunning){
       interval = setInterval(startTimer,10);
       timerRunning = true;
    }
};

// start Timer
let startTimer = () => {
    timer++;
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));

    minutesElement.textContent = leadingZero(minutes);
    secondsElement.textContent = leadingZero(seconds);
};

// leading Zero
let leadingZero = (time) => {
    if(time <= 9){
        return "0" + time;
    }
    else{
        return time;
    }
};

// ApplyColors
let applyColors = (color) => {
    textAreaElement.style.borderColor = color;
};

// Clear Fields
let clearFields = () => {
    timer = 0;
    timerRunning = false;
    minutes = 0;
    seconds = 0;
    interval = 0;
};

// generateRandomText
let generateRandomText = () => {
    let randomIndex = Math.round(Math.random() * 10);
    originalTextElement.textContent = textArray[randomIndex];
};