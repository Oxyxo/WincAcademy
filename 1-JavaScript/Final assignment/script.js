document.addEventListener('DOMContentLoaded', function(){
    let hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", function(){
        toggleNav();
    });
    let colorChoice = document.getElementsByClassName("color");
    console.log(colorChoice)
    for (let i=0; i<colorChoice.length; i++){
        colorChoice[i].addEventListener("click", function(){
            console.log(this);
            colorChange(this.id);
            toggleNav();
        });
    }
    document.addEventListener("keypress", function(e){
        let key = e.charCode;
        if (key >= 49 && key <= 55) {
            let number =key -48;
            colorNumber(number);
        }
    });  
});

function toggleNav() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
} 

function colorChange(color) {
    let body = document.body;
    body.id=color;
    let text = document.getElementById("colorText");
    text.innerHTML = color;
}

function colorNumber(number) {
    let colors = ['red', 'orange', 'yellow', 'green', 'light-blue', 'blue', 'purple'];
    let color = colors[number-1];
    colorChange(color);

}