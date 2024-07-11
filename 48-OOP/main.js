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


//------------------------------------------------------------------------------------------
/*
    OOP
        Class
            Static properties & methods
            بمعنى لو عملت ستاتيك بروبيرتي مثلا هعرف اوصلها من البيرنت نفسه انما الانيستنس مش هعرف
*/


class User{
    count = 0;
    constructor(name, salary) {
        this.n = name;
        this.s = salary;
    }
}
let newUser = new User("Hussein", 60000);
console.log(newUser.n);//Hussein
console.log(newUser.s);//60000
console.log(newUser.count);//0
console.log(User.count);//undefined



class User{
    static count = 0;
    constructor(name, salary) {
        this.n = name;
        this.s = salary;
        User.count++;
    }

    static sayHello() {
        return `Hello from class`;
    }

    static countMembers() {
        return `${this.count} Members`;
    }
}
//static can be accessed only by parent class

let newUser2 = new User("Hussein", 60000);
console.log(newUser2.n);//Hussein
console.log(newUser2.s);//60000
console.log(newUser2.count);//undefined
console.log(User.count);//0
//console.log(newUser2.sayHello());//Error can't be accessed
console.log(User.sayHello());//Hello from class

let newUser3 = new User("Mohamed", 10000);

console.log(User.countMembers());//2 mem



//------------------------------------------------------------------------------------------
/*
    OOP
        Class
            Inheritance
*/


class User
{
    position = "newUser";
    constructor(name, age, salary) {
        this.na = name;
        this.ag = age;
        this.sa = salary;
    }
}


class Admin extends User // Inheritance
{
    position = "Admin";
    constructor(name, age, salary, permission){
        super(name, age, salary);
        this.pe = permission;
    }
}

let ins = new Admin("Hussein",20, 20000 ,"add");
console.log(ins);//Admin { na: 'Hussein', ag: 20, sa: 20000, pe: 'add' }
console.log(ins.position);//newUser after inheritance it will be Admin because if there is prop with same name it will be overrided

// ins.position = "Admin"

// console.log(ins.position);//newUser



//------------------------------------------------------------------------------------------
/*
    OOP
        Class
            Encapsulation
                Class fields are public by default
                Guards the data against illegable access 
                Helps to achieve the target without revealling its complex details
                Will reduce human errors
                Make the app more flexible and managable
                Simplifies the app
*/
class User
{
    constructor(name, age, salary) {
        this.na = name;
        this.ag = age;
        this.sa = salary;
    }
}

let user9 = new User("Hussein", 20, 10000);
console.log(user9.sa * 0.3);

//what if??
user9 = new User("Hussein", 20, "10000 L.E.");
console.log(user9.sa * 0.3);//NaN


class User
{
    // private property
    #sa;

    constructor(name, age, salary) {
        this.na = name;
        this.ag = age;
        //to make a private field add # before it
        this.#sa = salary;
    }

    getSalary() {
        return parseInt(this.#sa);
    }
}

user9 = new User("Hussein", 20, "10000 L.E.");
//console.log(user9.#sa * 0.3);//private field can't be accessed only bby family class the allowable scope
console.log(user9.getSalary() * 0.3);//3000

user9 = new User("Hussein", 20, "Error");
console.log(user9.getSalary() * 0.3);//NaN

//------------------------------------------------------------------------------------------
/*
    Prototype
        => Mecyhanism by which js objects inhrits features from one another
*/


class User
{
    constructor(id, username) {
        this.id = id;
        this.name = username;
    }
    sayHello() {
        return 'Hello from the class';
    }
}

let userA = new User(1, "Hussein");
console.log(User.prototype);//the features can be used


//------------------------------------------------------------------------------------------
/*
    prototype
        Add to prototype chain
        Extend buuilt in constructors features ازود امكانيات الكونستركتور
*/
class User
{
    constructor(id, username) {
        this.id = id;
        this.name = username;
    }
    sayHello() {
        return 'Hello from the class';
    }
}

let userB = new User(1, "Hussein");
console.log(User.prototype);//the features can be used


//Adding method to User class
User.prototype.saywelcome = function () {
    return 'Welcome';
}

console.log(userB.saywelcome());//Welcome

Object.prototype.love = "I love you";
console.log(userB.love);//I love you


String.prototype.addFullName = function (first) {
    return `${this} Elghareb`;
}

let first = "Hussein";
console.log(first.addFullName());

//------------------------------------------------------------------------------------------
/*
    Object metadata & descriptor
        writable
        enumerable
        configurable [Cann't be delete or reconfigure]
*/

const myObj = {
    a: 1,
    b: 2
};

Object.defineProperty(myObj, "c", {
    // writable: false,
    writable:true,
    //enumerable: false,
    enumerable: true,
    //configurable: false,
    configurable: true,
    value:3
});
myObj.c = 100//if writable true it will be changed if not it will be ignored
console.log(myObj);//{ a: 1, b: 2, c: 3 }


//c will not be printed because the enumerable is false if true it will be print
for (let i in myObj) {
    console.log(i, myObj[i]);
}

//if the configurable is false then it will not be deleted and the property can't be redefined if true it can be
console.log(delete myObj.c);

//------------------------------------------------------------------------------------------
/*
    Object metadata & descriptor
        Define multible properties
        Check Descriptors
*/

const myObj1 = {
    a: 1,
    b: 2
};

Object.defineProperties(myObj1, {
    c: {
        configurable: true,
        value: 3
    },
    d: {
        writable: true,
        value: 4
    },
    e: {
        enumerable: true,
        value: 5
    }
});

for (let i in myObj1) {
    console.log(i, myObj1[i]);
    /*
        a 1
        b 2
        e 5
    */
    //Not that c & d doesn't exist
}

myObj1.c = 100;
myObj1.d = 100;
myObj1.e = 100;

console.log(myObj1.c);//3
console.log(myObj1.d);//100
console.log(myObj1.e);//5
//Note that c & e was not overrided or changed


console.log(delete myObj1.c);//t
console.log(delete myObj1.d);//f
console.log(delete myObj1.e);//f
//Note that d & e was not can't be deleted
