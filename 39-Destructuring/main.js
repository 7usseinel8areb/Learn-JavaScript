/*
    Destructuring
        -> is ajs expression that allows us to extract data from arrays, objects then map and set them into new variables 
*/
let myFriends = ["Ahmed", "Sayed", "Hussein", "Ali"];

// //Destructuring
// let [a, b, c, d ,e] = myFriends;

// console.log(c);//Hussein
// console.log(e)//undefinned

//to solve this put a default values
[a, b, c, d, e = "Kareem"] = myFriends;
console.log(e);// Kareem but we can't override at line 8 so we can't define kareem make comment for line 8

//if i want 1 , 2 , 4
let [x, y, , z] = myFriends;
console.log(z);//Ali

//----------------------------------------------------------------------------------------------------------------------------------
/*
    Destructuring 
        Advanced examples
*/

myFriends = ["Ahmed", "Sayed", "Hussein", "Ali", ["Kamal", "Waleed",["Rahma","Yaseen"]]];
let [, , , , [, , [m]]] = myFriends;
console.log(m)


//----------------------------------------------------------------------------------------------------------------------------------
/*
    Destructuring
        Swapping variables
*/
a = 5, b = 7;
//old 
let temp = a;
a = b;
b = temp;
console.log(a, b);//7 , 5

a = 5, b = 7;

//new by destructuring
[b, a ]= [a, b];
console.log(a, b);

//----------------------------------------------------------------------------------------------------------------------------------
/*
    Destructuring
        Destructuring object
*/

let user = {
    name: "Hussein",
    age: 20,
    title: "Backend developer",
    country: "Egypt"
};
let user2 = {
    name: "Kamal",
    age: 21,
    title: "Developer",
    country: "Morroco"
};

console.log(user.name);
console.log(user.age);
console.log(user.title);
console.log(user.country);


let { name, age, title } = user;
console.log(title, "From distrucured");


({ name, age, title } = user2);//error if there is no let or vart or const must be at ()

console.log(name);

//----------------------------------------------------------------------------------------------------------------------------------
/*
    Destructuring
        Destructuring object
            Naming the vaiables
            Add new property
            Nested object
            Destructuring the nested object
*/

user = {
    name: "Hussein",
    age: 20,
    title: "Backend developer",
    country: "Egypt",
    skills: {
        html: 70,
        css:80,
    },
};

//Renaming the properties

({ n, a, t } = user);
console.log(n, a, t); // => will be undefined

({ name: n, age: a, title: t, country } = user);
console.log(n, a, t);


//Adding new property
({ name: n, age: a, title: t, country, color: c = "Yellow" } = user);
console.log(c);
// console.log(color)//error not defined


//Nested object
({ name: n, age: a, title: t, country, color: c = "Yellow", skills: { html: h,css:cs } } = user);
console.log(h)
console.log(cs)

//----------------------------------------------------------------------------------------------------------------------------------
/*
    Destructuring
        Destructuring Function parameters
*/

user = {
    name: "Hussein",
    age: 20,
    title: "Backend developer",
    country: "Egypt",
    skills: {
        html: 70,
        css:80,
    },
};


function showDetails(obj) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.title)
}

//with destructuring
function showDetails2( { name:n, age:a, title:t, skills: { html:h } }= user) {
    console.log(n);
    console.log(a);
    console.log(t);
    console.log(h);
}
showDetails2();

user2 = {
    name: "Malak",
    age: 30,
    title: "Frontend developer",
    country: "Libya",
    skills: {
        html: 70,
        css:80,
    },
};
console.log("------------------")
showDetails2(user2)