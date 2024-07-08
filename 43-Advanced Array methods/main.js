/*
    Array Methods
        Array.from(Iterable, MapFunction, This)
*/

console.log(Array.from("Hussein"/*Iterable*/));//['H', 'u', 's', 's', 'e', 'i', 'n']
console.log(Array.from("12345"/*Iterable*/,
    (num) => num * 2 /*Function*/));


let myArray = [1, 1, 2, 3, 4, 1];

let mySet = new Set(myArray);

console.log(mySet)// {1, 2, 3, 4}
console.log(Array.from(mySet));// [1, 2, 3, 4]
console.log([...new Set(myArray)]);// [1, 2, 3, 4]

console.log("####".repeat(3));


//How to rename the Array.from Method
function af() {
    return Array.from(arguments)
}

console.log(af("h", "u", "s", "s", "e", "i", "n", 1, 2, 3));//['h', 'u', 's', 's', 'e', 'i', 'n', 1, 2, 3]
console.log("####".repeat(10));
//---------------------------------------------------------------------------------------------------
/*
    Array Methods
        nameOfArray.copyWithin(Target, Start => Optional, End => Optional)

        => Copy part of an array to another location in the same array
            & Any negative value will count from the end

        Target
            Index to copy part to
            If at or greater than array length nothing will be copied
*/


myArray = [10, 20, 30, 40, 50, "A", "B"];

myArray.copyWithin(3);//targeted index
/*
    Ans: 
        [10, 20, 30, 10, 20, 30, 40]
        Take all the array copy then add it to index 3
        [10, 20, 30, 10, 20, 30, 40, 50, "A", "B"]
        Then make array length = 7 again remove last 3 elements
        [10, 20, 30, 10, 20, 30, 40]
*/
console.log(myArray)

myArray = [10, 20, 30, 40, 50, "A", "B"];

myArray.copyWithin(3,5);
/*
    Ans:
        [10, 20, 30, "A", "B", "A", "B"];

*/
console.log(myArray);

myArray = [10, 20, 30, 40, 50, "A", "B"];

myArray.copyWithin(4, 6);
/*
    Ans:
        [10, 20, 30, 40, "B", "A", "B"];

*/
console.log(myArray);

myArray = [10, 20, 30, 40, 50, "A", "B"];

myArray.copyWithin(1, -2);
/*
    Ans:
        [10, "A", "B", 40, 50, "A", "B"];

*/
console.log(myArray);

myArray = [10, 20, 30, 40, 50, "A", "B"];

myArray.copyWithin(1, -2, -1);
/*
    Ans:
        [10, "A", 30, 40, 50, "A", "B"];

*/
console.log(myArray);

console.log("####".repeat(10));
//---------------------------------------------------------------------------------------------------
/*
    Array Methods
        Array.some(callBackFunction(element, index, arr),this)
*/


myArray = [1, 2, 3, 4, 5, "Hussein"];


//check if there is string in the array
let x = myArray.some((element, index, array) => {
    return isNaN(element);
});
console.log(x);//t


myArray = [1, 2, 3, 4, 5];
x = myArray.some((element, index, array) => {
    return isNaN(element);
});
console.log(x);//f

x = myArray.some((element, index, array) => {
    return element > 5;
});
console.log(x);//f

x = myArray.some((element, index, array) => {
    return element > 4;
});
console.log(x);//t


let myNumber = 10;

x = myArray.some((element) => {
    return element >= this; // this = myNumber
}, myNumber)
console.log(x);//f



//Functino to check if the array contains the given value
function check(arr, val) {
    return arr.some((element) => {
        return element === val;
    }, val);
}

let range = {
    min: 10,
    max: 20
}

let checkInRange = function (arr,{ min: mn, max: mx} = range) {
    return arr.some(function (element) {
        return element >= this.mn && element <=this.mx;
    },{mn,mx})
}
//Another way
// checkInRange = function (arr,s = ({ min: mn, max: mx} = range)) {
//     return arr.some(function (element) {
//         return element >= this.min && element <=this.max;
//     },s)
// }

myArray = [1, 2, 3, 30, 10, 39];
console.log(checkInRange(myArray, range));//t

myArray = [1, 2, 3, 4, 5, 6];
console.log(checkInRange(myArray, range));//f
console.log("####".repeat(10));
//---------------------------------------------------------------------------------------------------
/*
    Array Methods
        array.every(callBackFunction(element, index, arr),this)
        => all elements must equal to the given condition but some only one element
*/

myNumber = 10
myArray = [1, 2, 3, 4, 5];
check = myArray.every(function (element, index, array) {
    return element <= this;
}, myNumber);

console.log(check);//t

myNumber = 10
myArray = [1, 2, 3, 4, 5 ,20];
check = myArray.every(function (element, index, array) {
    return element <= this;
}, myNumber);

console.log(check);//f

