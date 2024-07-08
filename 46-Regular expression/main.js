/*
    Regular expression
        Email, IP, Phone, URL, ....
*/

let str1 = '10 20 100 1000 5000';
let str2 = 'Os1 Os12 Os123 Os123os Os12312Os123';

//to check valid or not using if conditions will take more time so use reqular expression
let invalidEmail = 'hussein@@@gmail....com';
let validEmail = 'hussein@gmail.com';

let ip = '192.168.1.1';

//all this urls will be valid
let url = 'https://elzero.com';
url = 'https://www.elzero.com';
url = 'https://.elzero.com';
url = 'elzero.org'
url = 'elzero.org/'



//---------------------------------------------------------------------------------------------------------------
/*
    Regular Expression

    syntax
        /pattern/modifier(s)
        new RegExp("pattern", "modifires")

    Search Method
        match(pattern)

    Modifiers
        i => case sensetive
        g => global
        m => multilines => sez=arch in multi lines
*/

let myString = "Hello Elzero web school I love elzero";

//Search
let regex = /Elzero/;
console.log(myString.match(regex));//['Elzero', index: 6, input: 'Hello Elzero web school I love elzero', groups: undefined]
regex = /elzero/;
console.log(myString.match(regex));//['elzero', index: 31, input: 'Hello Elzero web school I love elzero', groups: undefined]

console.log("####".repeat(4));

//Modifires
//i => case sensetive
regex = /elzero/i;
console.log(myString.match(regex));//['Elzero', index: 6, input: 'Hello Elzero web school I love elzero', groups: undefined]

//g => global
//give me all valid matching words
regex = /elzero/ig;
console.log(myString.match(regex));//['Elzero', 'elzero']
regex = /elzero/g;
console.log(myString.match(regex));//['elzero']
regex = /elze/ig;
console.log(myString.match(regex));//['Elze', 'elze']
