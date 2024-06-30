/*
    Function
        Anonymous function
        Calling named function vs anonymous
        Argument to other function
        task without name
        setimeout
*/

//can be called before an implemntation
console.log(calc(2, 4));

function calc(num1, num2) {
    return num1 + num2;
}


//Anonymous
let calculator = function (num1, num2) {
    return num1 + num2;
}
//can't be used before implementation
//caled by variablle name
console.log(calculator(5, 9));


//Another Examples
document.getElementById("show").onclick = function () {
    alert("Hello from anonymous function no need to be named");// function elzero(){} X
}


setTimeout(function(){
    console.log("After 2 seconds");
},2000)