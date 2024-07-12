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



//--------------------------------------------------------------------------------------
/*
    Date & Time
        Methods
            getDate() => Day of the month
            getTime() => Number of millyseconds
            getFullYear()
            getMonth() => Zero Based
            getDay() => Day of the week
            getHours()
            getMinutes()
            getSeconds()
*/

dateNow = new Date();
let birthday = new Date('Dec 20, 2003');
console.log(birthday);

let dateDiff = dateNow - birthday;
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);//20 years old

console.log(dateNow.getDate());// 13 from 13 / 7 /2024
console.log(dateNow.getTime());
console.log(dateNow.getDay());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getMonth());//0 index ex: month 7 will print 6
console.log(dateNow.getFullYear());