let a = "Elzero Web School";
//--------Zero---------
console.log(a.slice(2, 3).charAt(0).toUpperCase() + a.slice(3, 6));
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));


//--------HHHHHHHH-----
console.log(a.charAt(a.indexOf('h')).toUpperCase().repeat(8));


//--------Return array = [Elzero]
console.log([a.split(" ")[0]])


//---------Elzero school--
console.log(a.substr(0, 6), a.substr(11));


//-------Solution Must be dynamic
//elZERO WEB SCHOOl
console.log(a.charAt(0).toLowerCase() + a.substr(1, a.length - 2).toUpperCase() + a.charAt(a.length - 1).toLowerCase());