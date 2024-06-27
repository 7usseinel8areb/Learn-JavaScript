let theName = "  Hussein    ";
console.log(theName[3]);

console.log(theName.charAt(4));

console.log(theName.length);

console.log(theName.trimEnd());
console.log(theName.trimStart()+"<- space here");
console.log(theName.trim() + "<- no space here");

console.log(theName.toLowerCase());
console.log(theName.toUpperCase());

console.log(theName.trim().charAt(0).toLowerCase());//h

//-----------------------------------------------------------------

let stringMethod2 = "Elzero web school";

console.log(stringMethod2.indexOf("web"));
console.log(stringMethod2.indexOf("web", 8));

//start from the last index
console.log(stringMethod2.lastIndexOf("o"));//15 -> Elzer[o]

console.log(stringMethod2.slice(5, 10));//o web
console.log(stringMethod2.slice(4));//ro web school
console.log(stringMethod2.slice(-3));//ool
console.log(stringMethod2.slice(-5, -3));//ch
console.log(stringMethod2.repeat(5));

console.log(stringMethod2.split());
console.log(stringMethod2.split(' '));
console.log(stringMethod2.split(''));
console.log(stringMethod2.split(' ', 2));//limit


//-----------------------------------------------------------------

console.log(stringMethod2.substring(5));
console.log(stringMethod2.substring(5, 8));
console.log(stringMethod2.substring(-10));//it also will start from 0
console.log(stringMethod2.substring(18));//Undefined
console.log(stringMethod2.substring(stringMethod2.length - 1));

console.log(stringMethod2.substr(1));
console.log(stringMethod2.substr(-3));
console.log(stringMethod2.substr(-5, 3));//this means start from the last 5 and then give me 3 chars -> cho


console.log(stringMethod2.endsWith('l'));
console.log(stringMethod2.endsWith('o',5));//the length not the index

console.log(stringMethod2.startsWith('E'));
console.log(stringMethod2.startsWith('W'));

console.log(stringMethod2.includes('w', 2));//starting from index 2

