let zero = 0;
let counter = 3;

let my = ["ahmed", "Mazero", "Elham", "Osama", "Gamal", "Omar", "Hussein"];

//"ahmed", "Mazero", "Elham", "Osama"
console.log(my.slice(zero, my.indexOf("Gamal")).reverse());

ans = my.slice(my.indexOf("Mazero"), my.indexOf("Osama")).reverse();
//"Elham", "Mazero"
console.log(ans);

console.log(ans[zero].slice(zero++, --counter) + ans[zero].slice(counter));