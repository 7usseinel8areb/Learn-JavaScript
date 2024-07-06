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


//----------------------------------------------------------------------------------------------------------------------------------
/*
    Set vs WeakSet

    WeakSet
        Stores only objects but the set stores any data type
        if the reference doesn't exist then this objects can be garabage collected

    1)
    Set => have size properity
    WeakSet => Doesn't have size properity
    
    2)
    Set => have keys, values, entries
    WeakSet => Doesn't have keys, values, entries

    3)
    Set => Can use foreach
    WeakSet => Can't use foreach
*/


//1)
mySet = new Set([1, 2, 3, 4, 1, 1, "A", "A"]);
console.log(mySet)
console.log(mySet.size);//5

let myWeakSet = new WeakSet([{ A: 1, B: 2 }]);//only obj
console.log(myWeakSet);

//2)
let iterators = mySet.keys();
let x;
console.log(iterators)
for (let i = 0; i < mySet.size + 1; i++){
    x = iterators.next();
    console.log(`value of iterator is ${x.value} is it the last element in the set ${x.done}`);
    /*
        value of iterator is 1 is it the last element in the set false
        value of iterator is 2 is it the last element in the set false
        value of iterator is 3 is it the last element in the set false
        value of iterator is 4 is it the last element in the set false
        value of iterator is A is it the last element in the set false
        value of iterator is undefined is it the last element in the set true
    */
}


//3)
mySet.forEach((x) => console.log(x));