//export default can't be added in {}
//Can use oly one export default
//import Hussein ,{ a, saySomething as s, myNumer as b } from "./main.mjs";
//this will work too
//import * as all from "./main.mjs";
//this will work too
import sayHello ,{ a, saySomething as s, myNumer as b } from "./main.mjs";


console.log(a);
//console.log(saySomething());
console.log(s());

console.log(b);

console.log(sayHello());