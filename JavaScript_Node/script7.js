//a function that is a property of an object is called its method
//Functions that do something often don't need a return statement
//Functions that produce or calculate something always use a return statement. Except some arrow functions

function add(number1, number2) {
    const sum = number1 + number2;
    return sum; //stops the function
};

result = add(4, 5);

console.log(result); //9
console.log(add(4,5)); //9

function multiply(number1, number2) {
    const sum = number1 * number2;
    if (sum > 100) {
        return sum;
    }
    return "your result is less than 100";
}

console.log(multiply(4,4)); //your result is less than 100

const doubleArray = function(numbers) {
    const doubled = numbers.map(n=> n * 2);
    return doubled;
}

console.log(doubleArray([1, 2, 3]));//[ 2, 4, 6 ]

// Functions that do something
// A function that does something can do things like:

// print something to the console
// display an alert
// change the background color of a webpage
// add a button to a webpage
// send an email
// write to a database

// 1. function declarations
function sayHello1() {
    console.log('Hello 1');
}
// 2. function expressions most adviseable 
const sayHello2 = function() {
    console.log('Hello 2');
}
// 3. arrow function (also a function expression)
const sayHello3 = () => {
    console.log('Hello 3');
}

const square = number => {
    return number * number;
  };

const add2 = (number1, number2) => number1 + number2;

