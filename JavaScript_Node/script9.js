//Hey kiddo
const Age = function(age) {
    return age>= 18;
}
console.log(Age(19)); //true

const isAdult = function(age) {
    const legalAge = Age(age);
    if (legalAge == true) {
        return 'Hello there';
    } return 'Hey kiddo!';
}
console.log(isAdult(19));//Hello there
console.log(isAdult(13));//Hey kiddo!

//VAT calculations
const price = function(price, vatPercent) {
    const totalVat = vat(vatPercent);
    const totalPrice = price* (1 + totalVat);
    return 'The total price is ' + totalPrice;
}

const vat = function(vatPercent){
    return vatPercent/100;
}

console.log(price(100, 21)); //The total price is 121
console.log(price(500, 21)); //The total price is 605

//VAT excercise 2
const price2 = function(fullPrice, vatPercent) {
    const priceNoVat = fullPrice/(1+vat2(vatPercent));
    const vatAmount = fullPrice - priceNoVat;
    return `Price without VAT is ${priceNoVat} Vat is ${vatAmount}`;
    
}

const vat2 = function (vatPercent) {
    return vatPercent/100;
}

console.log(price2(121, 21));//Price without VAT is 100 Vat is 21
console.log(price2(605, 21));//Price without VAT is 500 Vat is 105