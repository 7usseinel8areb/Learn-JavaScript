let price = 100;
let country = "Egypt";



if (country === "Syria") {
    price += 30;
} else if (country === "Egypt") {
    price -= 20;
}
else {
    price *= 10;
}

console.log(price, country);



//-----------------------------------------
//Nested if
if (country === "Syria") {
    price *= 10;
    if (price >= 1000) {
        country = "Romania"
    } else {
        country = "Iraq";
    }
} else {
    country = "Kuwait";
}

console.log(price, country);