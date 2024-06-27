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