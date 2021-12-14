document.addEventListener('DOMContentLoaded', function() {

    let button = document.getElementById("mybutton2");
    console.log(button);
    button.addEventListener("click", function() {
        // var body = document.body;
        // body.classList.add("red-background");
        toggleColor()
    });
});

function toggleColor(){
    var body = document.body;
    body.classList.toggle("red-background");
}

function alertFunction(){
        alert("button clicked!");
    };
