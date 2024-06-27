let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + c++ - +a++);
//11 + 20 + 80 - 11 = 100
//a = 12, b = 21, c = 81
console.log(++a + -b + +c++ - -a++ + +a);
//13 + -21 + 81 - -13 + 14 = 100
//a = 14, b = 21, c = 82
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
//81 + 21 + 13 * 21 - 22 * 13 + 12 - 1
console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1)//100

//------------------------------------------------------------------
let d = "-100";
let e = "20";
let f = 30;
let g = true;

// //1
// console.log();//2000
// //Ans
// console.log(-d * +e);

//2
console.log();//173
//Ans
console.log(-d + ++e * ++g + ++f);