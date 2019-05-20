// display Wish Message
let displayWishMessage = (message , color) => {
    let h2Tag = document.querySelector('#msg');
    h2Tag.textContent = message;
    h2Tag.style.backgroundColor = color;
    h2Tag.style.padding = '10px';
    h2Tag.style.color = 'white';
    h2Tag.style.boxShadow = '0 0 10px black';
};

// JavaScript Event Listeners
// Good Morning Button
let GMButton = document.querySelector('#good-morning');
GMButton.addEventListener('click',function() {
    wishMessage('Good Morning','orangered');
});

// Good Afternoon Button
let GAButton = document.querySelector('#good-afternoon');
GAButton.addEventListener('click',function() {
    wishMessage('Good Afternoon','blue');
});

// Good Evening Button
let GEButton = document.querySelector('#good-evening');
GEButton.addEventListener('click',function() {
    wishMessage('Good Evening','teal');
});

// Good Night Button
let GNButton = document.querySelector('#good-night');
GNButton.addEventListener('click',function() {
    wishMessage('Good Night','black');
});

// wishMessage
let wishMessage = (message , color) => {
    let h2Tag = document.querySelector('#new-msg');
    h2Tag.textContent = message;
    h2Tag.style.backgroundColor = color;
    h2Tag.style.padding = '10px';
    h2Tag.style.color = 'white';
    h2Tag.style.boxShadow = '0 0 10px black';
};

// Change the Image
let changeImage = (imageName,imageText) => {
    let theAddress = `../img/${imageName}`;
    let imageTag = document.querySelector('#image');
    let figCaptionTag = document.querySelector('#figcaption');

    // change the image address
    imageTag.setAttribute('src',theAddress);

    // change the figcaption text
    figCaptionTag.textContent = imageText;
};