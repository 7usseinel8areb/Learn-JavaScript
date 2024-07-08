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
