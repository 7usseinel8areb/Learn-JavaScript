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