const coding = ["js", "ruby", "java", "python", "cpp"];

const newCode = []
coding.forEach(code => {
  // console.log(code)
  newCode.push(code)
}) //it doesn't return anything

// console.log(newCode)


const nums = [20,30,40,50,60,70,80,90]

// const filteredNums = nums.filter(item => item >= 50)

// const filteredNums = nums.filter((item) =>  (item % 4 && item % 3) );

// const filteredNums = nums.filter((item) => item % 4).map(item => item + 2);



// console.log(filteredNums)


const sum = nums.reduce((acc,currVal)=> acc + currVal,0)

console.log(sum)

const filteredNumsSum = nums.filter((item) => item % 4).map((item) => item + 2).reduce((acc,currVal)=> acc + currVal , 0);


console.log(filteredNumsSum)