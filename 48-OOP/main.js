/*
    OOP
        Constructor function
            => Create an object from the class may be parametrized or not

            first letter best practice to be capital

            Syntax => function User() {}
*/

function User(id,name,salary) {
    this.userId = id;
    this.userName = name;
    this.userSalary = salary
};

//Creating instance from the constructor function

const user1 = new User(1, "Hussein", 10000);
const user2 = new User(2, "Mohamed", 20000);
const user3 = new User(3, "Alaa", 9000);

console.log(user1.userName, "=>",user1.userSalary)
console.log(user2.userName, "=>",user2.userSalary)
console.log(user3.userName, "=>",user3.userSalary)