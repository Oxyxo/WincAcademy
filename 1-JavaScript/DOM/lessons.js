//query selector
<div id="wrapper"></div>
// jQuery example:
$('#wrapper')
// Is the same as vanilla JavaScript:
const wrap = document.querySelector('#wrapper')
const wrap = document.querySelector('#book-list li: nth-child(2) .name');
//select 1 element
//eventlistener, e= event parameter
//https://developer.mozilla.org/en-US/docs/Web/Events?retiredLocale=nl
wrap.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);
});

var books = document.querySelector('#book-list li .name'); //select all, but he grabs first one only
var books = document.querySelectorAll('#book-list li .name'); //select really all



document.getElementById('wrapper');

var titles = document.getElementsByClassName('title');
titles[1];

//get elements by tagName. every single li on the page
var lis = document.getElementsByTagName ('li');
lis;

//loop through the elements, and do something with each one

titles

for (i=0; i< titles.length; i++) {
    console.log(titles[i]);
}

//other way to cycle through

Array.from(titles).forEach(function(item){
    console.log(item);
})

Array.from(btns).forEach(function(btn){
    btn,addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }) //deletes the whole li with click on 'delete' button
})

//e.preventDefault(); prevents default behaviour (f.ex you will not go on other website)

//task JS-console in Chrome
// element choice
let choose = document.getElementById('first-section');
// choose both paragraphs, get HTML collection
let paraChoice = document.getElementsByClassName('paragraph');

document.body.innerHTML = "Ik ben de nieuwe inhoud van body";

//defer and async; https://javascript.info/script-async-defer
// https://flaviocopes.com/javascript-async-defer/
//not this:
//<script src="https://javascript.info/article/script-async-defer/long.js?speed=2"></script>
//but this:
<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=2"></script>

//older way
document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
  })

//add event listener 3. https://youtu.be/F3odgpghXzY?t=79

var myP = document.getElementsById('myP');

myP.addEventListener('click', function(){myDiv.style.background = 'lightblue'});
//or, onclick - only 1 event assigned at a time, works at old browsers
myP.onclick = function(){myDiv.style.background = 'lightblue'};
myP.removeEventListener('click', changeText, false);