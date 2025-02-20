// say name function

function sayName (){
  console.log("hassan ali")
}

sayName()


// add two number function

function addTwoNum(num1, num2){
  console.log(num1 + num2)
}

addTwoNum(3,5)

// function without return statement

const result = function sumFunc(num1, num2){ //undefine 
  num1 + num2
}

console.log(result(3,5))

// function with return statement

const result2 = function sumFunc(num1, num2){
 return num1 + num2
}

console.log(result2(3, 5));

// function without argument

function loginUserNameMessage (user){
  return `${user} is just logged in`
}

const loginUserName = loginUserNameMessage()

console.log(loginUserName)

// with argument 

const loginUserNamePass = loginUserNameMessage("john doe")

console.log(loginUserNamePass)

// Rest operator (...)

// function with multiple argument without rest operator

// function calculateCartPrice(num){
//   return num
// }

// console.log(calculateCartPrice(200,400,60))    // result 200 only

// function calculateCartPrice(...num){
//   return num
// }

// console.log(calculateCartPrice(200,400,60)) //result an array


// ++++++++++++++++++++++++++++++ special scenerio for interview +++++++++++++++++++++++++++++++

function calculateCartPrice(val, val1, ...num){
  return num
}

console.log(calculateCartPrice(200,400,600, 800, 1000))


// function for object


function handleObject (anObject){
  return  `The name of user is ${anObject.name} and his profession is ${anObject.profession}`
}

console.log(handleObject({name : "Hassan Ali", profession : "software engineer"}))

// function for object


function handleArray (anArray){
  return  anArray[2]
}

console.log(handleArray([1,4,5,8]))