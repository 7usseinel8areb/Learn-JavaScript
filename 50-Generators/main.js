/*
    Generators
        generator function run its code when required
        returns special object
        generators are iterable
*/

function* generatNumbers() {
    yield 1;
    console.log('Hello after yield one');
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

let generator = generatNumbers();

console.log(typeof generator);//obj
console.log(generator.next());//done false and the alert will not work only after finishing generator because yield
// console.log(generator.next().done);
// console.log(generator.next().value);
console.log(generator.next());//yield one done so alert work and yield 2 done false



for (let i of generatNumbers()) {
    console.log(i);
}

for (let i of generator) {
    console.log(i);
}