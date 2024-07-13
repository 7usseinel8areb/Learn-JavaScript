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

//--------------------------------------------------------------------------------------
/*
    Generators
        Delegate generators
*/
function* generatNums() {
    yield 1;
    yield 2;
    yield 3;
}

function* generatLetters() {
    yield 'A';
    yield 'B';
    yield 'C';
}

function* generatAll() {
    yield* generatNums();//delegate
    yield* generatLetters();//delegate
    yield* [1, 2, 3];
    yield [1, 2, 3];// will output Array not the items of the array
    yield generatNums();//will output function name
}

let generate = generatAll();
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
//console.log(generate.return("Stop Here")); //to stop generating
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
