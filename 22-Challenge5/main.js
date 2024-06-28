let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 to 40");
} else if (a > 40) {
    console.log(">40");
} else {
    console.log("Unkown");
}


//write wiht ternary if syntax
console.log(a < 10 ? 10 : a >= 10 && a <= 40 ? "10 to 40" : a > 40 ? ">40" : "Unkown");

//---------------------------------------------------------
let st = "Elzero web school"; 

if (typeof st === typeof "34") {
    console.log("Good");
}

if (st.charAt(st.indexOf('w')) === "w") {
    console.log("Good");
}

if (st !== "string") {
    console.log("Good");
}

if (!(st === "number")) {
    console.log("Good")
}

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}