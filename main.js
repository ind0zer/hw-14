const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Bob" },
];

const names = users.map((user) => user.name);

console.log(names);

const users1 = [
  { id: 1, name: "John", eyeColor: "blue" },
  { id: 2, name: "Jane", eyeColor: "green" },
  { id: 3, name: "Alice", eyeColor: "blue" },
  { id: 4, name: "Bob", eyeColor: "brown" },
];

const blueEyes = users1.filter((user) => user.eyeColor === "blue");

console.log(blueEyes);

const users2 = [
  { id: 1, name: "John", gender: "male" },
  { id: 2, name: "Jane", gender: "female" },
  { id: 3, name: "Alice", gender: "female" },
  { id: 4, name: "Bob", gender: "male" },
];

const femaleNames = users2.filter((user) => user.gender === "female").map((user) => user.name);

console.log(femaleNames);

const users3 = [
    { id: 1, name: 'John', isActive: true },
    { id: 2, name: 'Jane', isActive: false },
    { id: 3, name: 'Alice', isActive: true },
    { id: 4, name: 'Bob', isActive: false }
];

const notActive = users3.filter((user) => user.isActive === false)

console.log(notActive);

const users4 = [
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Jane', email: 'jane@gmail.com' },
    { id: 3, name: 'Alice', email: 'alice@gmail.com' },
    { id: 4, name: 'Bob', email: 'bob@gmail.com' }
];

const requiredEmail = 'alice@gmail.com';

const findReqEmail = users4.find((user) => user.email === requiredEmail);

console.log(findReqEmail);

const users5 = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 34 },
    { id: 3, name: 'Alice', age: 42 },
    { id: 4, name: 'Bob', age: 19 }
];

const usersInThisAge = users5.filter((user) => user.age >= 20 && user.age <= 40);
console.log(usersInThisAge)