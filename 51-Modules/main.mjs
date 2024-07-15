/*
    Modules
        Import & Export

    Export => تصدير
    Import => استيراد

    change the extention file from js to mjs
*/

//will be used in another file "app.js" will call by emport
/*export*/ let a = 10;

let arr = [1, 2, 3, 4, 5];


//will be used in another file "app.js" will call by emport
/*export*/ function saySomething() {
    return `Something`;
}


//to export multible
export {
    a, saySomething
}



//-------------------------------------------------------------------------------------
/*
    Modules
        Export Alias
        Named Export
        Default Export
        Import All
*/

let b = 20000;

export {
    b as myNumer
}



export default function sayHello() {
    return `Hello`;
}