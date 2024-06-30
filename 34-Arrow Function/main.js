/*
    Function
        Arrow function
            Regular vs Arrow [Param + No param]
            Mutiple Lines
*/

let print = function () {
    return 10;
};

let print2 = () => {
    return 20;
};

let print3 = () => 30;
let print4 = _ => 40;

console.log(print());
console.log(print2());
console.log(print3());
console.log(print4());


//if on paramter only it is not necessary to use ()
let print5 = (num1 ,num2) => {
    return num1 + num2;
}

console.log(print5(3,7));

