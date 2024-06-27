/*
    Number
        Douple Precision
        Syntating Sugar "_"
        e
        **
        With Decimal
        Number + Bigint
        Number Min and Max Values
*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(1000000.000);
console.log("------------------------------")
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);

//-----------------Some Methods with Number--------------------------------------
console.log(100..toString());
console.log((100).toString());
console.log(100.10.toString());

let x = 100;
console.log(x.toString());

console.log(100.555.toFixed());    
console.log(100.555.toFixed(2));

console.log(Number("100"));
console.log(Number("100 Hussein"));

console.log(+"100");
console.log(+"100 Hussein");

console.log(parseInt("100"));
console.log(parseInt("100 Hussein"));
console.log(parseInt("Hussein 100 Hussein"));


console.log(Number.isInteger("100"));
console.log(Number.isInteger(100));
console.log(Number.isInteger(100.00));
console.log(Number.isInteger(100.5));

console.log(isNaN(100));//false
//both true
console.log(isNaN("Hussein"));
console.log(isNaN("Hussein" / 20));