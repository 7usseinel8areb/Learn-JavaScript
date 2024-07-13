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


//--------------------------------------------------------------------------------------
/*
    Date & Time
        Methods
            setTime(ms)
            setDate() => Day of the month [- or +]
            setFullYear(year, month => opt [0,11], Day => opt [1,31])
            setMonth(Month [0,11], Day => opt [1,31] [- or +])
            setHours(Hours [0-23, minutes => opt [0, 59, seconds => opt [0-59], ms => opt [0,999]]])
            setMinutes(minutes [0,59] ,seconds => opt [0-59], ms => opt [0,999])
            setSeconds(seconds => opt [0-59], ms => opt [0,999])
*/

dateNow = new Date();
console.log(dateNow);
console.log("#".repeat(30));

dateNow.setTime(0);
console.log(dateNow);//1970 1 1

dateNow.setTime(10000000);
console.log(dateNow);//1970 1 1

dateNow.setTime(Date.now());
dateNow.setDate(1);
console.log(dateNow);
dateNow.setDate(-1);
console.log(dateNow);

dateNow.setFullYear(2024, 11, 20);//2024-12-20
console.log(dateNow);


dateNow.setFullYear(2024, 12, 60);//2025-03-01
console.log(dateNow);


//--------------------------------------------------------------------------------------
/*
    Date & Time
        Track operation time
    
    Search
        performance.now()
        performance.mark()
*/
//Start time
let Start = new Date();

//Operation
for (let i = 0; i < 100000; i++) {
    document.write(`<div> ${i} </div>`)
}

//End time
let End = new Date()

// Operation Duration

let Duration = End - Start;
console.log(Duration);