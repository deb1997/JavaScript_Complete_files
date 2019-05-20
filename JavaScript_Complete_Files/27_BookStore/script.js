let sno = 100;

// Get the Form Tag
let theForm = document.querySelector('#store-form');
theForm.addEventListener('submit',function(e) {
    // Prevent the Action Form Submission
    e.preventDefault();

    // Get the Form Data
    let bookName = document.querySelector('#book-name').value;
    let authorName = document.querySelector('#author-name').value;
    let isbnNumber = document.querySelector('#isbn-number').value;
    let categoryName = document.querySelector('#category-name').value;

    // Create a Book Object
    let book = {
        sno : sno,
        bookName : bookName,
        authorName : authorName,
        isbnNumber : isbnNumber,
        categoryName : categoryName
    };

    sno++;

    // Validate the Book
    let isValidBook = validateBook(book);

    if(isValidBook){
        // Display the book on the table
        displayBook(book);

        // Clear the Form Data
        clearFormData();

        // display Alert
        displayAlert('Book is Added','forestgreen');
    }

});


// Display the Book on the table
let displayBook = (book) => {
    let tableBody = document.querySelector('#table-body');
    let tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td>${book.sno}</td>
                                 <td>${book.bookName}</td>
                                 <td>${book.authorName}</td>
                                 <td>${book.isbnNumber}</td>
                                 <td>${book.categoryName}</td>
                                 <td>
                                    <a href="#!">
                                        <i class="fa fa-times-circle delete"></i>
                                    </a>
                                 </td>`;
    tableBody.appendChild(tableRow);
};

// Clear the Form Data
let clearFormData = () => {
    document.querySelector('#book-name').value = '';
    document.querySelector('#author-name').value = '';
    document.querySelector('#isbn-number').value = '';
    document.querySelector('#category-name').value = '';
};

// Delete a Book
let tableBody = document.querySelector('#table-body');
tableBody.addEventListener('click',function(e) {
   let targetElement = e.target;
   if(targetElement.classList.contains('delete')){
       targetElement.parentElement.parentElement.parentElement.remove();
       displayAlert('Book is Removed','purple');
   }
});

// Validate Book
let validateBook = (book) => {
    return validateBookName(book) && validateAuthorName(book)
        && validateISBNNumber(book) && validateCategoryName(book);
};

// validate Book Name
let validateBookName = (book) => {
    let bookName = book.bookName;
    if(bookName === ''){
        applyColors('#book-name');
        displayAlert('Book Name is Required','red');
        return false;
    }
    else{
        clearColors('#book-name');
        return true;
    }
};

// validate Author Name
let validateAuthorName = (book) => {
    let authorName = book.authorName;
    if(authorName === ''){
        applyColors('#author-name');
        displayAlert('Author Name is Required','red');
        return false;
    }
    else{
        clearColors('#author-name');
        return true;
    }
};

// validate ISBN Number
let validateISBNNumber = (book) => {
    let isbnNumber = book.isbnNumber;
    if(isbnNumber === ''){
        applyColors('#isbn-number');
        displayAlert('ISBN Number is Required','red');
        return false;
    }
    else{
        clearColors('#isbn-number');
        return true;
    }
};

// validate Category Name
let validateCategoryName = (book) => {
    let categoryName = book.categoryName;
    if(categoryName === ''){
        applyColors('#category-name');
        displayAlert('category Name is Required','red');
        return false;
    }
    else{
        clearColors('#category-name');
        return true;
    }
};

// apply Colors
let applyColors = (elementId) => {
    let theInputElement = document.querySelector(elementId);
    theInputElement.style.backgroundColor = 'coral';
    theInputElement.style.boxShadow = '0 0 5px red';
};

// apply Colors
let clearColors = (elementId) => {
    let theInputElement = document.querySelector(elementId);
    theInputElement.style.backgroundColor = 'white';
    theInputElement.style.boxShadow = '0 0 0px white';
};

// display alert Message
let displayAlert = (message,color) => {
    let h3Tag = document.createElement('h3');
    h3Tag.textContent = message;
    h3Tag.style.backgroundColor = color;
    document.querySelector('#msg-div').appendChild(h3Tag);
    setTimeout(removeAlertMessage,2000);
};

// Remove Alert Message
let removeAlertMessage = () => {
    document.querySelector('#msg-div h3').remove();
};