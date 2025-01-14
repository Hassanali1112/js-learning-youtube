"use strict";
let score = 44;
// check type
// console.log(typeof score)

score = "44";
let valueInNumber = Number(score);
// console.log(typeof valueInNumber)
//number

score = "44acbc";
valueInNumber = Number(score);
// console.log(typeof valueInNumber)
// console.log(valueInNumber)
// NaN

score = null;
valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// 0

score = undefined;
valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber)
// NaN

score = false;
valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber)
// 0

// ----------------------------------------------------------------------------

let str = "hassan ali";
let valueInString = String(str)
// console.log(typeof valueInString);
// console.log(valueInString)
// hassan ali

str = 33;
valueInString = String(str);
// console.log(typeof valueInString);
// console.log(valueInString);
// 33 but string

str = null;
valueInString = String(str);
console.log(typeof valueInString)
console.log(valueInString)
// null but string

str = false;
valueInString = String(str)
// console.log(typeof valueInString)
// console.log(valueInString)
// false but string

str = undefined;
valueInString = String(str);
// console.log(typeof valueInString)
// console.log( valueInString)
// undefined but string


// ------------------------------------------------------------------------------
let isLoggedIn = true;
let valueInBoolean = Boolean(isLoggedIn);
// console.log(typeof valueInBoolean);
// console.log(valueInBoolean)
// boolean true

isLoggedIn = "";
valueInBoolean = Boolean(isLoggedIn);
// console.log(typeof valueInBoolean)
// console.log( valueInBoolean)
// false

isLoggedIn = "hassan";
valueInBoolean = Boolean(isLoggedIn);
// console.log(typeof valueInBoolean)
// console.log(valueInBoolean)
// true

isLoggedIn = null;
valueInBoolean = Boolean(isLoggedIn);
// console.log(typeof valueInBoolean)
// console.log(valueInBoolean)
// false

isLoggedIn = undefined;
valueInBoolean = Boolean(isLoggedIn)
// console.log(typeof valueInBoolean)
// console.log( valueInBoolean)
// false


//                       Operations 

let value =7;
let negValue = -value;
// console.log(negValue); 

// console.log("3" + 3 + 2)
// console.log(3 + 3 + "2")
// console.log(3 + "3" + 2)

// console.log(+true)
// console.log(+false)
// console.log(+"")
// console.log(+null)
console.log(+undefined)

let num1;  num2;  num3;
num1= num2 = num3 = 3 + 3
console.table([num1 + num2 + num3])
