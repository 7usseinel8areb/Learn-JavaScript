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
