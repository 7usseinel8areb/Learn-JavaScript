/*
    Challenge
*/

let chosen = 1;

let myFriends = [
    { title: "Osama", age: 30, available: true, skills: ["HTML", "CSS"] },
    { title: "Hussein", age: 20, available: false, skills: ["C#", "JS"] },
    { title: "AKmal", age: 45, available: true, skills: ["Python", "C++"] }
];

({ title: n, age: a, available, availablility: av = available ? "Available" : "Not Available", skills: [firstSkill] } = myFriends[chosen - 1]);
console.log(n);
console.log(a);
console.log(n);
console.log(av);
console.log(firstSkill);