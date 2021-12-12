function calculation(number1, number2) {
    const calc1 = number1*number1 + number2*number2
    const calc2 = calc1*calc1
    return calc2;
}
console.log(calculation(10, 5)); //15625

const calculation2 = function(number1, number2) {
    const calc1 = number1*number1 + number2*number2
    const calc2 = calc1*calc1
    return calc2;
}
console.log(calculation2(10, 5)); //15625

const calculation3 = (number1, number2) => (number1*number1 + number2*number2)*(number1*number1 + number2*number2);
console.log(calculation3(10, 5)); //15625

//shorter solutions
const doSquareCalculation = function(number1, number2) {
    const sum = number1 * number1 + number2 * number2;
    return sum * sum;
};

const square = number => number * number;

const doSquareCalculation = (number1, number2) =>
    square(square(number1) + square(number2));
