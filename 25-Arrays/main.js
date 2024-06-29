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

//--------------------------------------------------------------------------------------------
//Using length with array

console.log(myfriends.length);//Now length = 4
console.log(myfriends)

//if i want to add new
myfriends[myfriends.length] = "New element"
console.log(myfriends.length)
console.log(myfriends)

myfriends.length = 3;
console.log(myfriends);//

myfriends.length = 5;//Cant restore the element removed
console.log(myfriends);


//----------------------------------------------------------------------------------------------
/*
    Array Methods
        unshift("", "") Add element to the first
        Push("","") Add to th end
        shift() Remove from the first
        Pop() Remove from the last
*/

myfriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
myfriends.unshift("Malak");
myfriends.push("Hussein");
console.log(myfriends);



myfriends.shift();
myfriends.shift();
console.log(myfriends);

myfriends.pop();
myfriends.pop();
console.log(myfriends);


//---------------------------------------------------------------------------------------------
/*
    Array Methods for searching
        indexOf(element, Starting position)
        lastInexOf(element, Starting position)
        includes(valueToFound, starting index)
*/


myfriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myfriends.indexOf("Mohamed"));
console.log(myfriends.indexOf("Mohamed",2));//-1 if was not found 

console.log(myfriends.lastIndexOf("Mohamed"));
console.log(myfriends.lastIndexOf("Mohamed",-2));

console.log(myfriends.includes("Mohamed"));
console.log(myfriends.includes("Mohamed",2));
console.log(myfriends.includes("Hussein",2));
