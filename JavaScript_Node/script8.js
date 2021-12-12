function calculation(number1, number2) {
    calc1 = number1*number1 + number2*number2
    calc2 = calc1*calc1
    return calc2;
}
console.log(calculation(10, 5)); //15625

const calculation2 = function(number1, number2) {
    calc1 = number1*number1 + number2*number2
    calc2 = calc1*calc1
    return calc2;
}
console.log(calculation2(10, 5)); //15625

const calculation3 = (number1, number2) => (number1*number1 + number2*number2)*(number1*number1 + number2*number2);
console.log(calculation3(10, 5)); //15625