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

