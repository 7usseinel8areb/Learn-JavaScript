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

//---------------------------------------------------------------------------------------------------------------
/*
    Regular Expression
        part1
            1) (X|Y) => X or Y
            2) [0-9] => 0 to 9
            3) [^0-9] => Any charachter Not 0 to 9
*/

console.log("####".repeat(10));

let tld = "Com Net Org Info Code Io";
let tldRegEx = /(Net|Com|Io)/i;
console.log(tld.match(tldRegEx));//find first of any of the regex

tld = "Com Net Org Info Code Io";
tldRegEx = /(Net|Com|Io)/ig;
console.log(tld.match(tldRegEx));// ['Com', 'Net', 'Io']

console.log("####".repeat(4));

let nums = "12345678910";
let numsRegEx = /[0-9]/g
console.log(nums.match(numsRegEx))//Any number

nums = "-1-2";
console.log(nums.match(numsRegEx))//[1, 2]\

nums = "12345678910";
numsRegEx = /[1-3]/g;
console.log(nums.match(numsRegEx));//['1', '2', '3', '1']

console.log("####".repeat(4));

let notNums = "12345678910Abcs@/\\";
let notNumsRegEx = /[^0-9]/g;
console.log(notNums.match(notNumsRegEx));//['A', 'b', 'c', 's', '@', '/', '\\']

console.log("####".repeat(4));

//Need start with Os and then have a number from 5 to 9 and end with Os
let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRegEx = /Os[5-9]Os/ig;
console.log(practice.match(practiceRegEx));//['Os8Os']

