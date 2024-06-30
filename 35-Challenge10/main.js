
let names = (...stringArray) => `String ${stringArray.map(e => `[${e}]`)} => Done !`

console.log(names("Hussein", "Ali", "shimaa"));


let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => nums.reduce((past, current) => past + current, 0) - one - two;

console.log(calc(10, 50, ...myNumbers));