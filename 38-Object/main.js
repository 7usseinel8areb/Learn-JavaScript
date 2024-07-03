/*
    Object
        Testing window object
        Accessing object
*/


console.log(typeof window);
console.log(typeof window.location);
console.log(window.location.href);//to now the current url
//console.log(window.location.assign("https://google.com"));//change the url


//creating an object
let user = {
    //properties
    theName: "Hussein",
    theAge: 20,

    //Methods
    sayHello: () => "Hello", // Function
};

//Accessing an object
console.log(`${user.sayHello()} my name is ${user.theName} and my age is ${user.theAge} years old`);


//--------------------------------------------------------------------------------------------------------------------
/*
    Object
        Dig deaber
        Dot Notation vs Bracket Notation
        Dynamic property name
*/

user = {
    theName: "Hussein",
    theAge: 20,
    "country": "Egypt",
    "100": "Hi"
};

console.log(user.theName);
console.log(user.country)
// console.log(user.100);//error
// console.log(user."100");//error
console.log(user["theName"]);
console.log(user["country"]);
console.log(user["100"]);



//dunamic property name
let myVar = "country";
console.log(user.myVar);//undefined

//--------------------------------------------------------------------------------------------------------------------
/*
    Object
        Nested objects
*/

user = {
    theName: "Hussein",
    theAge: 20,
    skills: ["C#", "Javascript", "C++", "Python"],
    available: false,
    addresses: {
        KSA: "Riyadh",
        EGY: {
            one:"Cairo",
            two:"Alexandria",
            three:"Damietta",
        }
    },

    // checkAvailability: user.available?"Available to work":"Not available to work"
    checkAvailability: () => {
        return this.available === true ? "Available to work" : "Not available to work";
    }
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[0]);
console.log(user.addresses);
console.log(user.addresses.EGY);
console.log(user.addresses.EGY.two);
console.log(user.addresses.EGY["three"]);
console.log(user["addresses"]["EGY"]["one"]);

console.log(user.checkAvailability());

//--------------------------------------------------------------------------------------------------------------------
/*
    Object
        Create with new keyword
*/

user = {};
console.log(user);
user.age = 20;
user["name"] = "Hussein";
user.sayHello = () => "Hello";
console.log(user);
console.log(user.sayHello());
console.log("-----------------------------------------------");
//New
user = new Object();
console.log(user);
user.age = 20;
user["name"] = "Hussein";
user.sayHello = () => "Hello";
console.log(user);
console.log(user.sayHello());
console.log("-----------------------------------------------");
user = new Object({
    name: "Hussein",
    age:20
})
console.log(user.name);

//--------------------------------------------------------------------------------------------------------------------
/*
    Object
        this keyword = window
*/

console.log(this === window);//true

console.log(this);//window

document.getElementById("cl").onclick = function () {
    //go to the owner
    console.log(this);//<button id="cl">Click</button>
}

user = {
    age: 20,
    ageInDays: function () {
        return this.age * 365;
    }
};

console.log(user.age);
console.log(user.ageInDays());


//--------------------------------------------------------------------------------------------------------------------
/*
    Object
        Create object with create method
*/

user = {
    age: 40,
    doubleAge: function () {
        return this.age * 2;
    }
}

let obj = Object.create({});
console.log(obj);
obj.age = 20;
console.log(obj);


let cobyObj = Object.create(user/*prototype => a copy from another object will be crearted*/)
console.log(cobyObj)
console.log(cobyObj.doubleAge());
cobyObj.age = 60;
console.log(cobyObj.doubleAge());

user = {
    available: false,
    checkWork: function () {
        return this.available ? "available to work" : "not available to work";
    }
}

console.log(user.checkWork());
user.available = true;
console.log(user.checkWork());
