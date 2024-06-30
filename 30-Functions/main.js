/*
    Function
        DRY => Don't Repeat your self
*/

function sayHello(userName, age) {
    let message;
    if (age < 20) {
        message = `Sorry ${userName}, The app is not suitable for you`;
    }
    else {
        message = `Hello ${userName}, Your age is ${age}`;
    }
    console.log(message);
}

sayHello('Hossam',40);
sayHello('Hussein',21);
sayHello('Malak', 18);



//------------------------------------------------------------------------------
/*
    Function
        Return
        Interruptting
*/
function print(userName) {
    return `Hello ${userName}`;
}

let result = print('Hussin');
console.log(result);


function generate(num1, num2) {
    for (let i = num1; i <=num2 ; i++) {
        console.log(i);
        if (i === 15) {
            return 'Interubted';
        }
    }
}

result = generate(10, 20);
console.log(result);


//-------------------------------------------------------------------------------
/*
    Function
        Default function parameters
        Old strategic[Condition+ logical Or]
        ES6 Method
*/

//old
function printHello(userName,age) {
    if (age === null) {
        age = "Unkown";
    }
    console.log(`Hello ${userName} your age is ${age}`);
}

function printHello(userName,age) {
    age = age || "Unkown";
    console.log(`Hello ${userName} your age is ${age}`);
}

printHello("Mai")

//ES6
function printHello(userName,age = "Unkown") {
    
    console.log(`Hello ${userName} your age is ${age}`);
}

printHello("Hussein");