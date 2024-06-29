/*
    Arrays
        Create arrays => new Array() , []
        Access 
        Nested array
        change array elements
        Check is it array or not
*/


// let myfriends = new Array();
let myfriends = ["Ahmed", "Mohamed", "sayed"];
console.log(myfriends[1]);

//Nested
myfriends = ["Ahmed", "Mohamed", "sayed", ["Alaa","Kamal"]];

console.log(myfriends[3])//["Alaa","Kamal"]
console.log(myfriends[3][1]);//"Kamal"


myfriends[1] = "Maya";
console.log(myfriends[1]);

myfriends[3] = "Sameh";//We can replace element with array
console.log(myfriends)

console.log(Array.isArray(myfriends));