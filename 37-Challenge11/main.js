/*
    you can use 
        , _ Space True => 1 => One time only in the code
    You can't use 
        Numbers Letters
    you must use 
        filter map reduce in one chain
*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";


//Ans => Elzero web school
let ans = myString.split(',')
    .filter(i => isNaN(i))
    .map(i => i === '_' ? ' ' : i)
    .reduce((cur, prev) => cur + prev)
    .slice(1, -1);//to remove E & Z at the start and the end

console.log(ans);


