/*
    Map data type
        new Map(Iterable = key & value)
    
    Map vs Object
        1)
        Map => Doesn't contain key by default
        Object => Has Default Key

        2)
        Map => Key can be anything [function, object, any premetive data types]
        Object => string or symbol

        3)
        Map => order by insertion
        Object => not 100% till now

        4)
        Map => Get items by size
        Object => Need to do manually

        5)
        Map => Can be directly iterated
        Object => Not Directly iterated

        6)
        Map => Better in performance when add or remove data
        Object => Low performance comparing with map
*/


//1)
console.log("#############1")

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);


//2)
console.log("#############2")
myObject = {
    10: "number",
    "10": "string"
};
console.log(myObject[10]);//string

myMap = new Map();

myMap.set(10, "number");
myMap.set("10", "string");
myMap.set(false, "boolean");
myMap.set({ a: 1, b: 2 }, "string");
myMap.set([1, 2, 3], "Array");
myMap.set(function doSomeThing() { }, "function");

console.log(myMap)

console.log(myMap.get(10));//number
console.log(myMap.get("10"));//string
console.log(myMap.get(false));//boolean

//4)
console.log("#############4")

myMap = new Map();
myMap.set(1,"Mohamed");
myMap.set(2,"Hussein");
myMap.set(3, "Kanmala");
console.log(myMap.size);//3

//to get length of an object
myObject = {
    name: "Hussein",
    age: 20,
    country: "Egypt",
}

console.log(Object.keys(myObject).length)//3 can't get the size directly

//5)
//loop in map
console.log("#############5")

for (let [Key, Val] of myMap) {
    console.log(Key, Val);
}
//another way
for (let it of myMap) {
    console.log(it[0],it[1])
}

console.log("##############")

//loop in obj
for (let key of Object.keys(myObject)) {
    console.log(key, myObject[key]);
}
//another way
for (let key in myObject) {
    console.log(key,myObject[key]);
}