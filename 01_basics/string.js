// console.log("hello world")

const name = "hassan ali";

const repoCount = 20;

// console.log(`my name is ${name} and my number of repostries on github are ${repoCount}`)

const myName = new String("hassan");

// console.log(myName);

// strings methods 

// console.log(myName[5])

// console.log(myName.__proto__)

const char = myName.charAt(5)

// console.log(char)

const indexOfChar = myName.indexOf("s")

// console.log(indexOfChar)

const myString =  myName.substring(3,6)

// console.log(myString)

const newString = myName.slice(-3,6)

// const newString = myName.slice(-6,4)

// console.log(newString)


const dummyUrl = "https://hassan.com/hassan%20ali";

const newUrl = dummyUrl.replace("%20","-")

// console.log(newUrl)

const value = "  hassan ali  ";

const trimedValue = value.trim();

// console.log(trimedValue)

const checkIncludes = dummyUrl.includes(".");

console.log(checkIncludes)