//return statements;

//function that produce something 

function big100(number1){
    if (number1> 100){
        return true;
    } 
    return 'false';
}
console.log('Your number is bigger than 100: ' + big100(10)); //Your number is bigger than 100: false
console.log('Your number is bigger than 100: ' + big100(1000)); //Your number is bigger than 100: true


//alternative solution

const numberIsBig = function(number) {
    return number > 100;
};
console.log(numberIsBig(150)); //true

//do something function
function brendaBouncer(maxNumber, curNumber, age) {
    if (age < 18){
        return "this is a club for adults";
    } else if (maxNumber > curNumber){
        return "come in";
    } return "it's too busy now, come back later";
}

console.log(brendaBouncer(10, 7, 19)); //come in
console.log(brendaBouncer(10,7,15)); //this is a club for adult
console.log(brendaBouncer(10, 10, 19)); //it's too busy now, come back later


//alternative solution

const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    let response;//use a temporary response variable
    if (ageOfPotentialVisitor < 18) {
        response = "this is a club for adults";
    } else if (currentVisitors >= maxVisitors) {
        response = "it's too busy now, come back later";
    } else {
        response = "come in";
    }
    return response;
};

console.log(getBouncerReaction(2000, 0, 15)); //this is a club for adults

//calculating the average, produce something
function average(number1, number2, number3, number4, number5){
    sum = number1 + number2 + number3 + number4 + number5;
    avg = Math.round(sum/5);
    return avg;
}

//console.log('The average is: ${average(1, 2, 3, 4, 5)}');
console.log(average(1,2,3,4,5)); //3
console.log(average(9, 8, 7, 6, 5)); //7
console.log(average(13, 36, 25, 53, 53)); //36

