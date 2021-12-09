const age = 20;
const isFemale = true;
const driverStatus = 'drunk'; //though bob is more preferrable
const firstName = 'Sarah';
const totalAmount = 75;

if (age >= 18) {
    console.log('You are allowed in!');
    if (age >=18 && age <=25){
        console.log("You get 50% off!");
    } else {
        console.log('No discount for you!');
    }

    if (isFemale == true){
        console.log("Hey lady, special treats for Ladies night!");
    } else {
        console.log("Men dont get special treats at ladies night!");
    }

    if (firstName === 'Sarah' || firstName === 'Bram') {
        console.log('We are 50 years old! You are entitled to a free beer on this festive day');
    }

    if (totalAmount> 100) {
        console.log('you get a free bottle of champagne!');
    } else if (totalAmount> 50) {
        console.log('you get a free portion of nachos');
    } else if (totalAmount>25) {
        console.log('you get free (veggie) bitterballen');
    }

    if (driverStatus== 'bob') {
        console.log('you are allowed to drive');
    } else {
        console.log('you are not allowed to drive');
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






