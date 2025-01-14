const myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())

const anOtherDate = new Date()

// console.log(Math.round(anOtherDate.getTime()/1000))

console.log(anOtherDate.toLocaleString("default",{
  weekday : "long"
}))