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