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