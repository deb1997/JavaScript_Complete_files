// Get the HTML Content

// get the document
let value = document;

// get all the list of tags
value = document.all;

// get the html tag
value = document.all[0];

// get head tag
value = document.head;

// get Title Tag
value = document.title;

// change the Title
document.title = 'Youtube';
value = document.title;

// get Body Tag
value = document.body;

// Get the Nav Tag
let aTag = document.querySelector('nav a');

// get the Text Content of a Tag
console.log(aTag.textContent);

// Change the Text Content
aTag.textContent = 'Good Morning';

// get the nav tag
let navTag = document.querySelector('nav');

// Change the Styles
navTag.style.backgroundColor = 'forestgreen';
navTag.style.boxShadow = '0 0 0 white';
