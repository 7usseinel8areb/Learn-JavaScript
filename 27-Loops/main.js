/*
    Loop
        for(){
        
        }
        array.foreach(element => {
            
            })
        while(){
        
        }
        do{
        
        }while()
*/

//make string in one array and numbers in another
let original = ["Hussein", 10, 22, "Alaa", "Kamal", "Mostafa", 99, 99, 33, 100, "Manal"];

let strings = [], numbers = [];

for (let i = 0; i < original.length; i++) {
    typeof original[i] === "string" ? strings.push(original[i]) : numbers.push(original[i]);
}
console.log("original", original);
console.log("From for loop");
console.log("string", strings);
console.log("numbers", numbers);
//---------------------------------------------------------------------------------------------------

strings = [], numbers = [];
original.forEach(i => {
    typeof i === "string" ? strings.push(i) : numbers.push(i);
});
console.log("From foreach loop");
console.log()
console.log("string", strings);
console.log("numbers", numbers);


//---------------------------------------------------------------------------------------------------
strings = [], numbers = [];
console.log("From while loop");
while (original.length !== 0) {
    x = original.pop();
    typeof x === "string" ? strings.push(x) : numbers.push(x);
}
console.log("string", strings);
console.log("numbers", numbers);



//---------------------------------------------------------------------------------------------------
original = ["Hussein", 10, 22, "Alaa", "Kamal", "Mostafa", 99, 99, 33, 100, "Manal"];
strings = [], numbers = [];
console.log("From do while loop");
do {
    x = original.pop();
    typeof x === "string" ? strings.push(x) : numbers.push(x);
} while (original.length !== 0);

console.log("string", strings);
console.log("numbers", numbers);