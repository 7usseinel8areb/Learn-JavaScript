console.log(..."Osama");//O s a m a
console.log([..."Omar"]);//Converting to array

console.log("####".repeat(4));

//Concatenate
let myArray1 = [1, 2, 3, 4];
let myArray2 = [5, 6, 7, 8];

let myArray3 = [...myArray1, ...myArray2];
console.log(myArray3);//[1, 2, 3, 4, 5, 6, 7, 8]
let myArray4 = [...myArray3, ..."Omar"];
console.log(myArray4);//[1, 2, 3, 4, 5, 6, 7, 8, 'O', 'm', 'a', 'r']

console.log("####".repeat(4));

//copied array
let copiedArray = [...myArray1];
console.log(copiedArray);

//Why to do this why not let x = arr;
//if we change the reference the copy will be changed

let x = myArray1;
myArray1[1] = 99;

console.log(x[1]);
console.log(copiedArray[1]);

console.log("####".repeat(4));

//Push inside array 
let myArray5 = ["Ahmed", "Hussein", "Mai", "Omnia"];
myArray5 = ["Mazen", ...myArray5];//push left
console.log(myArray5);
myArray5 = [...myArray5, "Malak"];
console.log(myArray5);

let newFriends = ["Zyad", "Wesam"];
//myArray5.push(newFriends);//wrong
myArray5.push(...newFriends);//wrong
console.log(myArray5);

console.log("####".repeat(4));

//Use with math objects
let myNums = [10, 20, 30, -100, 90, 222, 498];
console.log(Math.max(myNums));//Nan
console.log(Math.max(...myNums));//498

console.log("####".repeat(4));

//Spraed with objects => Merge objects
let objOne = {
    a: 10,
    b:20,
}
let objTwo = {
    c: 30,
    d: 40,
}

let ObjThree = { ...objOne, ...objTwo, e: 50 };
console.log(ObjThree);//{a: 10, b: 20, c: 30, d: 40, e: 50}