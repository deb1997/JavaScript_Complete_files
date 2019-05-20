// if - else
let time = 28;
if(time >= 0 && time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time > 17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Please enter a Proper Time');
}

//If-Else Grade Programme
let cgpa = 85;
if (cgpa >= 80 && cgpa <= 100) {
    console.log('Grade is O');
}
else if (cgpa >= 70 && cgpa <= 80) {
    console.log('Grade is E');
}
else if (cgpa >= 60 && cgpa <= 70) {
    console.log('Grade is A');
}
else if (cgpa >= 50 && cgpa <=60) {
    console.log('Grade is B');
}
else{
    console.log('Grade is F');
}

// Switch statement
let today = new Date().getDay();
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

// Print From 0 to 10
let output = '';
for(let i =0; i<= 10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// Print 20 to 0 diff 2
output = '';
for(let i = 20; i >= 0 ; i-=2){
    if(i > 0){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// Print stars using For Loop
output = '';
let theNumber = 5;
for(let i = 1 ; i<= theNumber; i++){
    for(let j = 1; j<= i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);

// Print Numbers
output = '';
theNumber = 9;
for(let i = 1; i<=theNumber; i++){
    for(let j = 1; j<=i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// Print Reverse Numbers
output = '';
theNumber = 9;
for(let  i = theNumber; i>=1; i--){
    for(let j = 1; j<=i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// Print triangle Numbers
output = '';
theNumber = 9;
for(let i=1; i<=theNumber; i++){
    for(let j = 1; j<=i ; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// Print Reverse triangle Numbers
output = '';
theNumber = 9;
for(let i = theNumber; i>=0; i--){
    for(let j = 1; j<=i ; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// While Loop
console.log('------------------------ While Loop ------------');

// Print From 0 to 10 using while loop
output = '';
let i =0;
while(i<= 10){
    if(i <= 9){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
console.log(output);

// Print 20 to 0 diff 2 Using While
output = '';
i = 20;
while(i >= 0){
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i-=2;
}
console.log(output);

// Print stars using While Loop
output = '';
theNumber = 5;
i = 1;
while(i<= theNumber){
    let j = 1;
    while(j<= i){
        output += '#';
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Print Numbers Using While Loop
output = '';
theNumber = 9;
i = 1;
while(i<=theNumber){
    let j = 1;
    while(j<=i){
        output += i;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Print Reverse Numbers Using While Loop
output = '';
theNumber = 9;
i = theNumber;
while(i>=1){
    let j = 1;
    while(j<=i){
        output += i;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);

// Print triangle Numbers Using While Loop
output = '';
theNumber = 9;
i=1;
while(i<=theNumber){
    let j = 1;
    while(j<=i){
        output += j;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Print Reverse triangle Numbers Using While Loop
output = '';
theNumber = 9;
i = theNumber;
while(i>=0){
    let j = 1;
    while(j<=i){
        output += j;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);

// Do While
console.log(`---------------------------------Do While Loop-------------------------------------------`)
//print 0 to 15  using do while loop
output = '';
i = 0;
do{
    if (i<=14) {
        output += `${i}_`;
    }
    else {
        output += `${i}`;
    }
    i++;
}
while(i<=15);
console.log(output);


//print the numbers from 44 to 0 by diff 4
output = '';
i = 90;
do{
    if (i>=9) {
        output += `${i} _ `;
    }
    else{
        output += `${i}`;
    }
    i -= 9;
}
while(i>=0)
console.log(output);

//print stars
output = '';
theNumber = 7;
i = 1;
do{
    j = 1;
    do{
        output += '^';
        j++;
    }
    while(j <= i);
    i++;
    output += `\n`;
}
while (i<=theNumber);
console.log(output);

//print numbers instead of stars
output = '';
numbers = 6;
i=1;
do{
    j = 1;
    do{
        output += `${i} `;
        j++;
    }
    while(j <=i);
    i++;
    output += `\n`;
}
while(i<=numbers);
console.log(output);

//print reverse numbers
output = '';
reverseNumber = 6;
i=reverseNumber;
do{
    j=1;
    do{
        output += `${i}  `;
        j++;
    }
    while(j<=i);
    i--;
    output += `\n`;
}
while(i>=1);
console.log(output);

//print the triangle numbers
output = '';
triNum = 7;
i=1;
do{
    j=1;
    do{
        output += `${j} `;
        j++;
    }
    while(j<=i);
    i++;
    output += `\n`;
}
while(i<=triNum);
console.log(output);

//print the reverse triangle numbers
output = '';
triNum = 7;
i=triNum;
do{
    j=1;
    do{
        output += `${j}  `;
        j++;
    }
    while(j<=i);
    i--;
    output += `\n`;
}
while(i>=1);
console.log(output);