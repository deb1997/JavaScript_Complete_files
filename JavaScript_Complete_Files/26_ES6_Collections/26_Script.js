/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

// Create a Map
let colors = new Map();
colors.set(1 , 'BLACK');
colors.set(2 , 'WHITE');
colors.set(3 , 'BLUE');
colors.set(4 , 'SILVER');
colors.set(5 , 'ORANGE');

console.log(colors);

// get
console.log(colors.get(2));

// has
console.log(colors.has(3));

// delete
colors.delete(3);
console.log(colors);

// Size
console.log(colors.size);

// Keys
let output = 'Keys : ';
for(let key of colors.keys()){
    output += `${key} `;
}
console.log(output);

// values
output = 'Values : ';
for(let value of colors.values()){
    output += `${value} `;
}
console.log(output);

// Entries
output = '';
for(let entry of  colors.entries()){
    output += `${entry[0]} => ${entry[1]}  | `;
}
console.log(output);

/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

// Create a Set of Elements

let colorSet = new Set();
colorSet.add('blue');
colorSet.add('red');
colorSet.add('blue');
colorSet.add('orange');
colorSet.add('blue');
console.log(colorSet);

// has value
console.log(colorSet.has('red')); // true

// Size
console.log(colorSet.size); // 3

// Delete
colorSet.delete('orange');
console.log(colorSet);

// clear
colorSet.clear();
console.log(colorSet);

