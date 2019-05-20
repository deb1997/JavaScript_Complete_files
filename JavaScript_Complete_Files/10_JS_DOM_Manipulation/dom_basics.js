// Get the HTML Elements

let h2Tag = document.querySelector('h2');

// Change the Styles
h2Tag.style.backgroundColor = '#174e4e';
h2Tag.style.color = 'white';
h2Tag.style.textAlign = 'center';
h2Tag.style.padding = '15px';

// Change the image
let imageTag = document.querySelector('#my-image');

// get the attribute value
let theSrc = imageTag.getAttribute('src');
console.log(theSrc);

// Set the Attribute Value
imageTag.setAttribute('src','../img/image2.jpg');