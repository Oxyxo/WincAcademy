let name = "";

function nameFunction() {
    name = prompt("Welcome! What is your name?", "Mark Rutte");
    if (name != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + name +" !";
    } 
    
}

function startGame() { 
    if (name == ""){
        alert('Please fill in your name');
        return
    }   
    let answer = generateNumber();
    let attempts = 5;
    while (true) {
        let result = guessNumber(answer);
        if (result == true) {
            alert("Congratulations, you have won the game!");
            break;
        } else {
            attempts --
            alert("Unfortunately, that is not correct! You have " + attempts + " attempts remaining");
            if (attempts === 0){
            alert("You have used all your attempts!");
            break
            }
        }
    }    
    byeUser(name);
}

function guessNumber(answer) {
    let number = prompt("Enter a number between 0 and 25 to start guessing...", 1);
    if (0>= number<= 25) {
        if (number == answer){
            return true;
        }
        
    } else {
        alert('Please enter a number between 0 and 25');
    } return false;
}

function generateNumber() {
    return Math.floor(Math.random() * 26);
}

function byeUser(name) {
    document.getElementById("demo3").innerHTML =
      "Bye " + name +" , see you!";
}

function restart() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";
    name = "";
}