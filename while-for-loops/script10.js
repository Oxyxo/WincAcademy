//loops-lecture, while loop
var age = 5;
while (age < 10) {
    console.log('your age is less than 10');
    age++;
} 
console.log('you are now over 10');

// while
let w = 0;
while (w < 5) {
  console.log(`This is while iteration number ${w}`);
  w++;
}

//for loops



// for
for (let i = 0; i < 5; i++) {
  console.log(`This is for iteration number ${i}`);
}

//https://levelup.gitconnected.com/five-ways-to-loop-through-a-javascript-array-3325f4673334

// // Arrow function, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// forEach((element) => { /* ... */ } )
// forEach((element, index) => { /* ... */ } )
// forEach((element, index, array) => { /* ... */ } )

// // Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// // Inline callback function
// forEach(function(element) { /* ... */ })
// forEach(function(element, index) { /* ... */ })
// forEach(function(element, index, array){ /* ... */ })
// forEach(function(element, index, array) { /* ... */ }, thisArg)
