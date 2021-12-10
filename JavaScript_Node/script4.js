//objects

let person = {
    name: 'Oxana',
    age: 35
}
console.log(person); //{ name: 'Oxana', age: 35 }

// Dot Notation
console.log(person.name); //Oxana
console.log(person.age); //35

// Bracket Notation
console.log(person['name']); //Oxana
console.log(person['age']); //35


evaluations = [7, 10, 9];
console.log(evaluations); // [ 7, 10, 9 ]

//Arrays

let color = []; //create empty array
color = ['green', 'blue', 'red'];

console.log(color);
console.log(color.length); //3
console.log(color[0]); //Log the first element of your array to the console
console.log(color[color.length - 1]); //Log the last element of your array to the console
color.push('Yellow');
color.push(5);
color.push({greeting: "hi, I am an object"});
console.log(color);

//A 'real-life' object

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {favourite_food: "fish",
    medium_liked_food: "dried fruits", 
    disliked_food: "walnuts"
    }},
    {name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {favourite_food: "tuna",
    medium_liked_food: "canned food", 
    disliked_food: "all fruits"
    }},
    {name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {favourite_food: "meaty things",
    medium_liked_food: "tuna", 
    disliked_food: "canned food"
    }}
    ]

console.log("Name cat breed 3:" , catBreeds[catBreeds.length-1].name); //Name cat breed 3: American Bobtail
console.log('Energy level cat breed 1:' , catBreeds[0].energy_level); //Energy level cat breed 1: 5
console.log('First temperament cat breed 2:' , catBreeds[1].temperament[0]); //First temperament cat breed 2: Affectionate
console.log('Last temperament cat breed 3:' , catBreeds[2].temperament[catBreeds[2].temperament.length -1]); //Last temperament cat breed 3: Sensitive
console.log('Favorite food cat breed 3:' , catBreeds[2].food.favourite_food); //Favorite food cat breed 3: meaty things

