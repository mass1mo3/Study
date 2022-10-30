function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0)/ users.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 12 };
let masha = { name: "Маша", age: 45 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
