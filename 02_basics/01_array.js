// storing multiple values under a single variable is called array

// syntaxs 
// 01

const myArr1 = [1, 2, 3, 4, 5]
// console.log(" A ",myArr1[3])

// 02
const myArr2 = new Array(3, 4, 5, 6, 7)
// console.log(" B ", myArr2[1])

// methods
 myArr1.push(9)

//  console.log(myArr1)
 
myArr1.pop()
//  console.log(myArr1)

myArr1.unshift(0)
//  console.log(myArr1)

myArr1.shift()
//  console.log(myArr1)


//  console.log(myArr1.includes(8));
//  console.log(myArr1.includes(3));

// console.log(myArr1.indexOf(9))
// console.log(myArr1.indexOf(5))

// const myArr3 = myArr2.join()


// console.log(typeof (myArr3.replaceAll(",", '')))


// splice , slice

console.log("A " ,myArr1)

console.log(myArr1.slice(0,4))

console.log(" B ", myArr1);

const myArr4 = myArr1.splice(2,2)

console.log( myArr4)
console.log("C", myArr1)



