function wallPainter(color, side){
    console.log("The " + side + " wall has been painted " + color);
};
wallPainter(); //The wall has been painted undefined

wallPainter('orange', 'north');//The north wall has been painted orange
wallPainter('grey', 'south-east');//The south-east wall has been painted grey

//does the order of the arguments matter when calling the function?
//what happens if you switch them in the function definition? ->nothing

//what happens if you change the order of the arguments in the function
//definition and when calling the function?

wallPainter('south-east', 'grey'); //The grey wall has been painted south-east
//if you give wrong order when calling a function it will put it in wrong places


// console.log(`The wall has been painted ` + color); // String concatenation
//     // or
// console.log(`The wall has been painted ${color}`); // String interpolation