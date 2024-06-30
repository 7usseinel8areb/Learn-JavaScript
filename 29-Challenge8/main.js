let myAdmin = ["Ahmed", "Osama", "Hussein", "Stop", "Samera", "Sayed"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Noor", "Amany", "Samia"];
myAdmin = myAdmin.slice(0, myAdmin.indexOf("Stop"));
document.write(`<div>We have ${myAdmin.length} Admins</div><hr>`);

for (let i = 0; i < myAdmin.length; i++) {
    // let employees = myEmployees
    //     .filter(e => e[0] === myAdmin[i][0])
    //     .map(e => `-${e}`)
    //     .join(`<br>`)
    let employees = []
    myEmployees.forEach(element => {
        if (element[0] === myAdmin[i][0])
            employees.push(`-${element}`);
    });
    document.write(`
        <div>
            The admin for team ${i + 1} is ${myAdmin[i]}
            <h3>Team members: </h3>
            ${
                employees ? employees.join(`<br>`) : "No members"
                //employees ? employees : "No members" // for the methods way
            }
        </div>
        <hr>
        `)
}
