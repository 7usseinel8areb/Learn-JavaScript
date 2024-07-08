
let n1 = [10, 30, 10, 20];
let n2 = [30, 10, 20];

//210 is the needed answer
console.log([...n1, ...n2].length * Math.max(...n2));
