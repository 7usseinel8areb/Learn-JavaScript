//Turn this code to switch statement

let job = "Manager";
let salary = 0;
if (hob === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developrer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}

//Answer
switch (job) {
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Support":
        salary = 6000;
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        break;
    default:
        salary = 4000;
}
