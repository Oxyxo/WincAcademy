const age = 25;
const isFemale = false;
const driverStatus = 'drunk'; //though bob is more preferrable

if (age >= 18) {
    console.log('You are allowed in!');

    if (isFemale == true){
        console.log("Free drinks for ladies tonight!");
    } else {
        console.log("No free drinks for you man!");
    }

    if (driverStatus== 'bob') {
        console.log('You are allowed to drive');
    } else {
        console.log('You are not allowed to drive');
    }

} else {
    console.log('You are too young, please stay outside');
}

// if (isFemale == true) {
//     console.log("Free drinks for ladies tonight!");
// } else {
//     console.log("No free drinks for you man!");
// }

// if (driverStatus== 'bob') {
//     console.log('You are allowed to drive');
// } else {
//     console.log('You are not allowed to drive');
// }






