/*
    Higher order function
        -> is a function that accepts functions as a partameter and/or returns a function.

        map
            -Create new array
            -Populated with the results of calling a provided function on every element in the calling array

            syntax:
                map(callBackfunction(element, index, array){},thisArg)
*/
let myNums = [1, 2, 3, 4, 5];
let newArray = myNums.map((element, index, array) => {
    return element + element;
});
console.log(newArray);

function addition(element) {
    return element * 2;
}

let add = myNums.map(addition);
console.log(add);


//Practice
/*
    Map
        swap cases
        inverted numbers
        ignore numbers
*/

let swappingCase = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let swapped = swappingCase.split('').map((element) => {
    if (element === element.toUpperCase())
        return element.toLowerCase();
    return element.toUpperCase();
}).join('');

console.log(swappingCase, '=>', swapped);
//----------------------------------------------------
let invertedAns = invertedNumbers.map((element) => {
    return element * -1;
})

console.log(invertedNumbers, '=>', invertedAns);
//---------------------------------------------------

let ignoreans = ignoreNumbers.split('').map((element) => {
    // if (+element != element) {
    //     return element;
    // }
    return isNaN(parseInt(element)) ? element : '';
}).join('');

console.log(ignoreNumbers, '=>', ignoreans);

//------------------------------------------------------------------------------------------------------------------
/*
    Filter
        method creates a new array 
        with all elements that passes the test

        syntax
            filter(callBackfunction(element, index, array){},thisArg)
*/

let firends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
//Get names starts with 'A'

let a = firends.filter((element) => {
    return element.startsWith('A'); 
})

a = firends.filter(e => e.startsWith('A'))

console.log(a);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Get even numbers only

let ans = numbers.filter(n => !(n % 2));
console.log(ans);

//practice
/*
    Filter
        Filter longest word by number
*/

let scentence = "I love foood code too playing much";
//filter words more than 4 chars
ans = scentence.split(' ').filter(e => e.length <= 4).join(' ');
console.log(ans)



ignoreNumbers = "elz123er4o";
//filter numbers
ans = ignoreNumbers.split('')
        .filter(element => isNaN(parseInt(element)))
        .join('')
console.log(ans);


let mix = "a13BS2ZX";
ans = mix.split('')
        .filter(x => !isNaN(x))
        .map(x => x * x);

console.log(ans)