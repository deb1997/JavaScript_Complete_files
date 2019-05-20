let colors = ['white','blue','red','green','black'];

// Normal for-loop
let output = '';
for(let i = 0; i<colors.length; i++){
    output += `${colors[i].toUpperCase()} `;
}
console.log(output);

// for-in Loop ES5 to get the indexes
output = '';
for(let index in colors){
    output += `${colors[index].toUpperCase()} `;
}
console.log(output);

// for-of Loop ES6 to get the values
output = '';
for(let elem of colors){
    output += `${elem.toUpperCase()} `;
}
console.log(output);

// forEach with Normal Function
output = '';
colors.forEach(function(color) {
    output += `${color.toUpperCase()} `;
});
console.log(output);

// forEach with Arrow Function
output = '';
colors.forEach(color => output += `${color.toUpperCase()} `);
console.log(output);

// map function of array
let lenArray = colors.map((color) => {
    return color.length;
});
console.log(lenArray);