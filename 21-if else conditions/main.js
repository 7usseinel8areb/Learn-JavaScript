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


//-----------------------------------------
//Ternary operator or condition
country = price >= 500 ? "Damietta" : "Mansoura";
console.log(country);



//-----------------------------------------
//Nullish

console.log(100);
console.log(-100);
console.log("");
console.log(0);
console.log(null);


let salary = null;
console.log(`The salary is ${salary}`);
console.log(`The salary is ${salary || 200}`);
console.log(`The salary is ${salary ?? 100}`);

salary = "";
console.log(`The salary is ${salary}`);
console.log(`The salary is ${salary || 200}`);
console.log(`The salary is ${salary ?? 100}`);

salary = 0;
console.log(`The salary is ${salary}`);
console.log(`The salary is ${salary || 200}`);
console.log(`The salary is ${salary ?? 100}`);
