/*
    Date & Time

    the time initialy starts from 1 / 1 / 1970
    ex: 2024 - 1970 = 54
*/

let dateNow = new Date();

console.log(dateNow);//2024-07-12T21:59:44.547Z
console.log(Date.now())//1720821619775 ms

let seconds = Date.now() / 1000;//to seconds
console.log(seconds);
let minutes = seconds/ 60;//to minutes
console.log(minutes);
let hours = minutes / 60;//to hours
console.log(hours);
let days = hours/ 24;//to days
console.log(seconds);
let years = days / 365;
console.log(years);//54

console.log(2024 - 1970);//54