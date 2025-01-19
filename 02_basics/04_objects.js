// const tinderUser = new Object();

const tinderUser = {};
tinderUser.name = "hassan ali";
tinderUser.email = "hassan@mail.com";

// console.log(tinderUser)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj4 = Object.assign( obj1, obj2, obj3)
// const obj4 = Object.assign({}, obj1, obj2, obj3) // best practice

const obj4 = { ...obj1, ...obj2, ...obj3 };

// console.log(obj4);

// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));
// console.log(Object.entries(obj4));

// console.log(tinderUser.hasOwnProperty("age"));
// console.log(tinderUser.hasOwnProperty("email"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
  courseName : "js urdu",
  courseInstructor :  "Hitesh Choudary",
  coursePrice : 999
}

const {courseInstructor : instructor, ...other} = course;
console.log(other)

console.log(instructor)