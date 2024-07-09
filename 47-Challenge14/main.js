/*
    Regular Expression Challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articals.php?id=100&cat=topics';
let url6 = 'https://www.elzero.org:8080/index.html/articals.php?id=100&cat=topics';

//Create RegEx that match all the given urls
let RegEx = /(https?:\/\/)?(www.)?\w+.\w+(:\d+)?(\/\w+.\w+)*\??((\w+=\w+)?&?)*/ig;

console.log(url1.match(RegEx));
console.log(url2.match(RegEx));
console.log(url3.match(RegEx));
console.log(url4.match(RegEx));
console.log(url5.match(RegEx));
console.log(url6.match(RegEx));

console.log("#####".repeat(8));


console.log(RegEx.test(url1));
console.log(RegEx.test(url2));
console.log(RegEx.test(url3));
console.log(RegEx.test(url4));
console.log(RegEx.test(url5));
console.log(RegEx.test(url6));