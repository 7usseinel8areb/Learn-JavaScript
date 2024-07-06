/*
    Set data type
        it is an object to store unique values
        Can't access element by index
        Syntax:
            new Set()
        
        Properties:
            size
        
        Methods
            add, delete, clear, has, size
*/

let myData = [1, 1, 2, 2, 2, 3];

let mySet = new Set(myData).add(4);//1 2 3 4 => Set() => then .add(1,,,,);
console.log(mySet);
console.log(mySet.size);//as length in array
console.log(mySet[0])//can't use index it is undefined
console.log(mySet.has(2));//t
console.log(mySet.has(5));//f
mySet.add(5).delete(1)// 2 3 4 5
console.log(mySet)
mySet.add(1, 6, 8); // Adding multible values
console.log(mySet)


console.log(mySet.delete(9));//false

mySet.clear();
console.log(mySet);

console.log(mySet.has(1));//f because i cleared the set