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