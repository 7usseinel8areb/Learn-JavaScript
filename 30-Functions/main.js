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


//---------------------------------------------------------------------------------
/*
    Functions
        Rest parameters
            Only one allowed
            Must be last element
*/

function calc(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}
console.log(calc(10, 20, 30, 40));

//if number of arguments is unkown? -> Rest parameter
function calc2(...numbers) {
    let sum = 0;
    numbers.forEach(element => {
        sum += element
    });
    return sum;
}

result = calc2(10, 20, 30, 40, 50, 60);
console.log(result);


//----------------------------------------------------------------------------------
/*
    Function Practice
*/
function showInfo(user = "Unknown", age = "Unknown", rate = 0, show = false, ...skills) {
    document.write(`
        <div>
            <h2>Welcome, ${user}</h2>
            <p>Age: ${age}</p>
            <p>Hour Rate: $${rate}</p>
            <p>${show === true ? `${skills.join(" | ")}` : `Not available to display`}</p>
        </div>
        <hr>
    `);
}
showInfo("Hussein", 21, 1000, true, "C#", "Javascript", "C++", "ASP.Net Core");

showInfo("Ali",20,30,false,"Python","Django")