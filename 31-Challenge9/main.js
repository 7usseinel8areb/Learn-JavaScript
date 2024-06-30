/*
    Random argument challenge
        showDetails("Hussein",20,true);
        showDetails(20,"Hussein",true);
        showDetails(true,"Hussein",20);
    Must return the same answer    
*/


function showDetails(...arguments) {
    let userName, age, status;

    arguments.forEach(element => {
        if (typeof element === "string")
            userName = element;
        else if (typeof element === "boolean")
            status = element;
        else
            age = element
    });

    document.write(`
        <div>
            <h2>Hello, ${userName}</h2>
            <p>your age is ${age}</p>
            <p>your are ${status?`Available`:`Not Available`} for hire</p>
        </div>
        <hr>
    `)
}

showDetails("Hussein", 30, true);
showDetails(25, "alaa", true);
showDetails(false, "Malak", 20);


//Another way

function showDetails2({ userName, age ,status}) {
    document.write(`
        <div>
            <h2>Hello, ${userName}</h2>
            <p>your age is ${age}</p>
            <p>your are ${status?`Available`:`Not Available`} for hire</p>
        </div>
        <hr>
    `)
}

showDetails2({ age: 20, status: false, userName: "Haneen" });