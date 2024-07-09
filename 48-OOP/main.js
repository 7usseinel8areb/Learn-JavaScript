/*
    OOP
        Constructor function
            => Create an object from the class may be parametrized or not

            first letter best practice to be capital

            Syntax => function User() {}
*/

function User(id,name,salary) {
    this.userId = id;
    this.userName = name;
    this.userSalary = salary
};

//Creating instance from the constructor function

const user1 = new User(1, "Hussein", 10000);
const user2 = new User(2, "Mohamed", 20000);
const user3 = new User(3, "Alaa", 9000);

console.log(user1.userName, "=>",user1.userSalary)
console.log(user2.userName, "=>",user2.userSalary)
console.log(user3.userName, "=>", user3.userSalary)


//------------------------------------------------------------------------------------------
/*
    OOP
        Constructor new syntax with ES2015
*/

console.log("#####".repeat(8));

class User{
    constructor(id, username, salary) {
        this.i = id;
        this.un = username;
        this.s = salary;
    }
}

let userOne = new User(4, "Hussein", 20000);

console.log(userOne instanceof User);//t
console.log(userOne.constructor === User);//t

//------------------------------------------------------------------------------------------
/*
    OOP
        Constructor
            Dealing with properties and mehtods
*/
console.log("#####".repeat(8));


class UserX{
    constructor(id, username, salary) {
        this.i = id;
        this.un = username || "Unkown";
        this.s = salary;
        // this.msg = function () {
        //     return `Hello ${this.un}, Your salary is ${this.s}`
        // }
    }

    //Method 
    msg() {
        return `Hello ${this.un}, Your salary is ${this.s}`
    }
}

let userTwo = new UserX(1, "", 20000);
console.log(userTwo.msg());


//------------------------------------------------------------------------------------------
/*
    OOP
        Update properties and Built in constructors
*/
console.log("#####".repeat(8));


class UserY {
    constructor(id, username, salary) {
        this.i = id;
        this.un = username || "Unkown";
        this.s = salary;
    }

    updateName(newName) {
        this.un = newName;
    }
}

let userThree = new UserY(1, "", 20000);
console.log(userThree.un);

userThree.updateName("Hussein");
console.log(userThree.un);

let strOne = "Hussein";
let strTwo = new String("Hussein");

console.log(typeof strOne);//Str
console.log(typeof strTwo);//Obj

console.log(strOne instanceof String);//false
console.log(strTwo instanceof String);//true

//Both of them use constructor string to build
console.log(strOne.constructor === String);//true
console.log(strTwo.constructor === String);//true