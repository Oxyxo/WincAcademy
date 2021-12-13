//iterators, old style

const colors = ['yellow', 'blue', 'red', 'orange'];


let i = 0;
let colorsLength = colors.length;
while(i < colorsLength ) {
    console.log(colors[i]);
   i++;
}
// yellow
// blue
// red
// orange

for (const element of colors ) {
  console.log(element);
} console.log('all colors are printed');
// yellow
// blue
// red
// orange

for(let i = 0; i< colors.length; i++) {
  console.log(colors[i]);
}
// yellow
// blue
// red
// orange

//new style forEach
colors.forEach(element => console.log(element)); console.log('done');
// yellow
// blue
// red
// orange

//1. for loop takes 3 lines, while loop takes 4 lines, forEach takes 1 line
//2. forEach method takes 1 line
//3. while loop is intuitively more understandable, forEach has a lot of signs
//4. array method cannot be used on an object.

const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    color: 'blue',
    miles: 30000
};
for (const i in myCar) {
    console.log(i, myCar[i]);    
}
// make Ford
// model Mustang
// year 1969
// color blue
// miles 30000