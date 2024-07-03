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