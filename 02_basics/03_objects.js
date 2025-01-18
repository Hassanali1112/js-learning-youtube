const mySmbol = Symbol("newKey");

const user = {
  name: "hassan",
  "full Name": "Hassan Ali",
  age: 18,
  email: "dev.hassan@gmail.com",
  isLoggedIn: true,
  mySym: Symbol("key1"), //not recommended not a unique key
  [mySmbol]: "unique key",
  loginDays: ["Thursday", "Saturday"],
}; // a literal object

// console.log(user.age)
// console.log(user["full Name"])
// console.log(typeof user.mySym);
// console.log(typeof user[mySmbol]);
// console.log(user);
delete user["full Name"]

Object.freeze(user)
user.email = "hassanali@gmail.com";
console.log(user);
console.log(["full name"] in user);

