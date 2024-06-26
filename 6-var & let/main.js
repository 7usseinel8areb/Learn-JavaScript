
////////////////////////////Redeclare

//allowable in var
var a = 1;
var a = 2;

//not allowable in let
let a = 1;
let a = 2;

//not allowable in Const
const a = 1;
const a = 2;

//--------------------------------------
////////////////////////////Access before declare
console.log(a);
a = 2;
//var => undefined
//let => error
//const => error

//--------------------------------------
////////////////////////////variable scope drama
var aabb = 10;
//aabb will be added to window this will make an issue named -> scope drama
//var => True
//let => False

