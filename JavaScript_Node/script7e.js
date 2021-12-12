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

