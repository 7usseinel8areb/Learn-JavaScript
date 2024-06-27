let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;


//find the smallest number and return integer
console.log(Math.trunc(Math.min(a, b, c, d)));

//use variable a & d one time to get 10000
console.log(a ** parseInt(d));
console.log(a ** Math.trunc(d));


//Get 2 from d in 4 different ways
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Math.round(d));


//Use b & d to get this values 66.67 => string, 67 => Number
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2).toString());
console.log(Math.ceil((Math.trunc(b) / Math.ceil(d))));