/*
    switch(expression){
        Case1:
            Code
            break;
        Case2:
            Code
            break;
        Default:
            Code
    }
*/

let day = 4;
let x;
switch (day) {
    case 0:
        x = "Saturday";
        break;
    case 1:
        x = "sunday";
        break;
    case 2:
        x = "Monday";
        break;
    case 3:
        x = "Teusday";
        break;
    case 4:
        x = "Wensday";
        break;
    case 5:
        x = "Thrasday";
        break;
    case 6:
        x = "Friday";
        break;
    default:
        x = NaN;
}


console.log(x);



//-------------------------------------
//Writting more than one case for one code

let m = "Ali";

switch (m) {
    case "Ali":
    case "Mohamed":
    case "Alaa":
        console.log(`Hello world by ${m}`);
        break;
    case "Hisham":
        console.log("Good By");
        break;
    default:
        console.log("Default statement");
}