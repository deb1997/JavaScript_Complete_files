// 1) get the elements
// 2) add the event listeners
// 3) add the logic

// 1) get the elements
let selectBox = document.querySelector('#select');
let spanTag = document.querySelector('#span');


// 2) add the event listeners
selectBox.addEventListener('change',function() {
    spanTag.textContent = selectBox.value;
});

/* --------------- Change Password ------------ */
let inputField = document.querySelector('#input-field');
let checkBox = document.querySelector('#check-box');
checkBox.addEventListener('change',function() {
    let theAttribute = inputField.getAttribute('type');
    if(theAttribute === 'password'){
        inputField.setAttribute('type','text');
    }
    else{
        inputField.setAttribute('type','password');
    }
});

/* -- Display the Entered Text */
let textBox = document.querySelector('#text-box');
let h2Tag = document.querySelector('#msg');
textBox.addEventListener('keyup',function() {
    let textEntered = textBox.value;
    h2Tag.textContent = textEntered;
    let textLength = textEntered.length;
    if(textLength % 2 === 0){
        textBox.style.backgroundColor = 'lightblue';
        h2Tag.style.color = 'blue';
    }
    else{
        textBox.style.backgroundColor = 'lightsalmon';
        h2Tag.style.color = 'red';
    }
});


/* -------------- SMS App --------------- */
let textAreaBox = document.querySelector('#text-area');
let countTag = document.querySelector('#count');
let charCount = 100;
textAreaBox.addEventListener('keyup',function() {
    let textEnteredLength = textAreaBox.value.length;
    countTag.textContent = (charCount - textEnteredLength).toString();
});
