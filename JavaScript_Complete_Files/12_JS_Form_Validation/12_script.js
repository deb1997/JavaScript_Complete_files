// get the Form element
let validateForm = () => {

    let isFormValid = validateUserName() && validateEmail()
                      && validatePassword() && validateConfirmPassword()
                      && validatePasswordsMatch();

    if(isFormValid){
        alert('Form Submitted Successfully');
        return true
    }
    else{
        return false;
    }

};

// Username Validation
let validateUserName = () => {
    let usernameField = document.querySelector('#username');
    if(usernameField.value === ''){
        let message = 'User Name is Required';
        applyColors(usernameField);
        displayErrorMessage(message);
        return false;
    }
    if(usernameField.value.length < 5){
        let message = 'Enter at least 5 letters';
        applyColors(usernameField);
        displayErrorMessage(message);
        return false;
    }
    if(!usernameField.value.match(/^[A-Za-z0-9_]{1,32}$/)){
        let message = 'No Special Characters';
        applyColors(usernameField);
        displayErrorMessage(message);
        return false;
    }
    else{
        return true;
    }
};


// Email Validation
let validateEmail = () => {
    let emailField = document.querySelector('#email');
    if(emailField.value === ''){
        let message = 'Email is Required';
        applyColors(emailField);
        displayErrorMessage(message);
        return false;
    }
    else{
        return true;
    }
};

// Password Validation
let validatePassword = () => {
    let passwordField = document.querySelector('#password');
    if(passwordField.value === ''){
        let message = 'Password is Required';
        applyColors(passwordField);
        displayErrorMessage(message);
        return false;
    }
    else{
        return true;
    }
};

// Confirm Password Validation
let validateConfirmPassword = () => {
    let c_passwordField = document.querySelector('#c_password');
    if(c_passwordField.value === ''){
        let message = 'Confirm Password is Required';
        applyColors(c_passwordField);
        displayErrorMessage(message);
        return false;
    }
    else{
        return true;
    }
};

// Password Match Validation
let validatePasswordsMatch = () => {
    let passwordField = document.querySelector('#password');
    let c_passwordField = document.querySelector('#c_password');
    if(passwordField.value !== c_passwordField.value){
        let message = "Password's Not Matched";
        applyColors(c_passwordField);
        applyColors(passwordField);
        displayErrorMessage(message);
        return false;
    }
    else{
        return true;
    }
};

// Apply Colors
let applyColors = (inputField) => {
    inputField.style.border = '1px solid orangered';
    inputField.style.boxShadow = '0 0 5px red';

};

// Display Error Message
let displayErrorMessage = (message) => {
    let h3Tag = document.createElement('h3');
    h3Tag.textContent = message;
    h3Tag.style.backgroundColor = 'red';
    document.querySelector('#error-msg').appendChild(h3Tag);
    setTimeout(removeErrorMessage,2000);
};

// Remove Error Message
let removeErrorMessage = () => {
    document.querySelector('#error-msg h3').remove();
};

// Blur Events for User Name
let usernameField = document.querySelector('#username');
usernameField.addEventListener('blur',function() {
    clearErrorMessage(usernameField);
});

// Blur Events for Email
let emailField = document.querySelector('#email');
emailField.addEventListener('blur',function() {
    clearErrorMessage(emailField);
});

// Blur Events for Password
let passwordField = document.querySelector('#password');
passwordField.addEventListener('blur',function() {
    clearErrorMessage(passwordField);
    clearErrorMessage(c_passwordField);
});

// Blur Events for Confirm Password
let c_passwordField = document.querySelector('#c_password');
c_passwordField.addEventListener('blur',function() {
    clearErrorMessage(c_passwordField);
    clearErrorMessage(passwordField);
});

// clear Error Message
clearErrorMessage = (inputField) => {
    if(inputField.value !== ''){
        inputField.style.border = '1px solid lightblue';
        inputField.style.boxShadow = '0 0 0px white';
    }
};