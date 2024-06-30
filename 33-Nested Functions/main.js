/*
    Function
        function inside function
        return function
*/


//1
function sayMessage1(FName, LName) {
    let message = 'Hello';
    function concatMessage() {
        message = `${message} ${FName} ${LName}`;
    }
    concatMessage();
    return message;
}


//2
function sayMessage2(FName, LName) {
    let message = 'Hello';
    function concatMessage() {
        return `${message} ${FName} ${LName}`;
    }
    return concatMessage();
}


//3
function sayMessage3(FName, LName) {
    let message = 'Hello';

    function concatMessage() {

        function getFullName() {
            return `${FName} ${LName}`;
        }

        return `${message} ${getFullName()}`;
    }

    return concatMessage();
}

console.log(sayMessage1("Hussein", "Mohamed"));
console.log(sayMessage2("Hussein", "Mohamed"));
console.log(sayMessage3("Hussein", "Mohamed"));