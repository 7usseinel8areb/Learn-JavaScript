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

//---------------------------------------------------------------------------------------------------------------
/*
    Regular Expression
        part2let
            1) [a-z] => a to z
            2) [^a-z] => not a to z
            3) [A-Z] => A to Z
            4) [^A-Z] => not A to Z
            5) [abc] => from this 3 chars only
            6) [^abc] => not from this 3 chars
*/

console.log("####".repeat(10));

myString = "AaBbcdefG123!234%^&*";


let aTOzRegEx = /[a-z]/g;
console.log(myString.match(aTOzRegEx))// ['a', 'b', 'c', 'd', 'e', 'f']

let ATOZRegEx = /[A-Z]/g;
console.log(myString.match(ATOZRegEx))// ['A', 'B', 'G']

let notaTOzRegEx = /[^a-z]/g;
console.log(myString.match(notaTOzRegEx))// ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']

let notATOZRegEx = /[^A-Z]/g;
console.log(myString.match(notATOZRegEx))// ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']


let abcRegEx = /[abc]/g;
console.log(myString.match(abcRegEx));// ['a', 'b', 'c']

let notabcRegEx = /[^abc]/g;
console.log(myString.match(notabcRegEx));// ['A', 'B', 'd', 'e', 'f', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']


let allAlphaSmallAndcapitalRegEx = /([a-z]|[A-Z])/g;
let allAlphaSmallAndcapitalRegEx2 = /[a-z]/ig;
let allAlphaSmallAndcapitalRegEx3 = /[a-zA-Z]/g;
console.log(myString.match(allAlphaSmallAndcapitalRegEx));//['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
console.log(myString.match(allAlphaSmallAndcapitalRegEx2));//['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
console.log(myString.match(allAlphaSmallAndcapitalRegEx3));//['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']

let nonAlphaRegex = /[^a-zA-Z]/g;
console.log(myString.match(nonAlphaRegex));//['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']

let onlySpecialRegEx = /[@!#$%^&*]/g;
let onlySpecialRegEx2 = /[^a-zA-Z0-9]/g;
console.log(myString.match(onlySpecialRegEx));// ['!', '%', '^', '&', '*']
console.log(myString.match(onlySpecialRegEx2));// ['!', '%', '^', '&', '*']

//---------------------------------------------------------------------------------------------------------------
/*
    Regular Expression
        Charachter classes
            . => matches any charachter, except newline or other line terminators
            \w => matches word chars. [a-z, A-Z, 0-9 and _ ]
            \W => matches non word chars
            \d => matches digits from 0-9
            \D => matches non digit chars
            \s => matches whitespace char
            \S => matches non whitspace chars
*/

console.log("####".repeat(10));

let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';

let dot = /./g;
console.log(email.match(dot))
/*      Ans
['O', '@', '@', '@', 'g', '.', '.', '.', 'c', 'o', 'm', ' ', 'O', 
'@', 'g', '.', 'c', 'o', 'm', ' ', 'O', '@', 'g', '.', 'n', 'e', 
't', ' ', 'A', '@', 'Y', '.', 'c', 'o', 'm', ' ', 'O', '-', 'g', 
'.', 'c', 'o', 'm', ' ', 'o', '@', 's', '.', 'o', 'r', 'g', ' ',
'1', '@', '1', '.', 'c', 'o', 'm']
*/

let word = /\w/g;
console.log(email.match(word));
/*      Ans
['O', 'g', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'O', 'g', 'n', 'e',
't', 'A', 'Y', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'o', 's', 'o', 
'r', 'g', '1', '1', 'c', 'o', 'm']
*/

let Word = /\W/g;
console.log(email.match(Word));
/*
['@', '@', '@', '.', '.', '.', ' ', '@', '.', ' ', '@', '.', ' ', '@', 
'.', ' ', '-', '.', ' ', '@', '.', ' ', '@', '.']
*/

//To find valid emails and ends with com and net
let valid = /\w@\w.(com|net)/g;
console.log(email.match(valid));//['O@g.com', 'O@g.net', 'A@Y.com', '1@1.com']


//---------------------------------------------------------------------------------------------------------------
/*
    Regular Expression
        Charachter classes
            \b => matches at the beggining or the end of a ward
            \B => matches not at beggining / end of the word
        
        Test methods
            pattern.test(input);
*/

console.log("####".repeat(10));

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

//this means spam at the beggining of the word
let spamregEx = /\bspam/ig
console.log(names.match(spamregEx));//['Spam', 'Spam']

//this means spam at the end of the word
spamregEx = /spam\b/ig
console.log(names.match(spamregEx));//['Spam', 'Spam', 'Spam']


//this means spam at start and end of the word
spamregEx = /\bspam\b/ig
console.log(names.match(spamregEx));//null

//this means spam at start and end of the word
spamregEx = /(\bspam|spam\b)/ig
console.log(names.match(spamregEx));//['Spam', 'Spam', 'Spam', 'Spam', 'Spam']



//Test
console.log(spamregEx.test(names));//true
console.log(/(\bspam|spam\b)/ig.test("Hussein"));//false
console.log(/(\bspam|spam\b)/ig.test("1Spam"));//true


//---------------------------------------------------------------------------------------------------------------
/*
    Regular expression

    Quantifires
    n+..... One or more
    n*..... zero or more
    n?..... zero or one
*/

console.log("####".repeat(10));

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@gmail.ru";
let mailsRegEx = /\w+@\w+.(com|net)/ig;
console.log(mails.match(mailsRegEx));// ['osama@gmail.com', 'elzero@gmail.net']
mailsRegEx = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRegEx));// ['o@nn.sa', 'osama@gmail.com', 'elzero@gmail.net', 'osama@gmail.ru']


nums = "0110 10 150 05120 0560 350 00";
numsRegEx = /\b0\d*0\b/ig;
console.log(nums.match(numsRegEx));//['0110', '05120', '0560', '00']


//give me valid emails
let urls = "https://google.com http://www.website.net web.com facebook.com www.facebook.com HH@.com HH123@@Hello.yehoo";
let urlsRegEx = /((https?:\/\/)?(www.)?)?\w+.(com|net)/ig; //only in s?
console.log(urls.match(urlsRegEx));
// ['https://google.com', 'http://www.website.net', 'web.com', 'facebook.com', 'www.facebook.com']

//---------------------------------------------------------------------------------------------------------------
/*
    Regular expression

    Quantifires
    n{x}..... Number of
    n{x,y}..... Range
    n{x,}..... at least x
*/


let serials = "S100S S3000S S50000S S950000S S300S";

let serialRegEx = /\bS\d{3}S\b/ig;
console.log(serials.match(serialRegEx));// S[Three Numbers]S // ['S100S', 'S300S']

serialRegEx = /\bS\d{4,5}S\b/ig;
console.log(serials.match(serialRegEx));// S[Four or five]S // ['S3000S', 'S50000S']

serialRegEx = /\bS\d{4,}S\b/ig;
console.log(serials.match(serialRegEx));// S[At least four]S // ['S3000S', 'S50000S', 'S950000S']

//---------------------------------------------------------------------------------------------------------------
/*
    Regular expression

    Quantifires
    $ => End with something
    ^ => start With someyhing
    ?= => followed by someyhing
    ?! => not followed by someyhing

*/

console.log("####".repeat(10));

myString = "We Love Programming";
names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString));//t
console.log(/(ing|lZ)$/ig.test(names));//t
console.log(/^we/ig.test(names));//f
console.log(/^we/ig.test(myString));//t
console.log(/^\d/ig.test(names));//t
console.log(/^\s/ig.test(names));//f


console.log(names.match(/\d\w{5}(?=Z)/ig));// ['1Osama', '2Ahmed', '5Gamal']
console.log(names.match(/\d\w{8}(?!Z)/ig));// ['3Mohammed']


//---------------------------------------------------------------------------------------------------------------
/*
    Regular expression

    replace
    replaceAll
*/

console.log("####".repeat(10));

let txt = "We Love Programming And @ Beacause @ Is Amazing";
console.log(txt.replace('@', 'Javascript'));
/*
    The first only
    We Love Programming And Javascript Beacause @ Is Amazing
*/
console.log(txt.replaceAll('@', 'Javascript'));
/*
    The first only
    We Love Programming And Javascript Beacause Javascript Is Amazing
*/

let regEx = /@/ig;
console.log(txt.replaceAll(regEx, 'Javascript'));