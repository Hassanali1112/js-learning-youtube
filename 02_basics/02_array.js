const marvelHeros = ["Ironman","spiderman","thor"];
const dcHeros = ["superman", "batman", "flash"];

// marvelHeros.push(dcHeros)

// const allHeros = marvelHeros.concat(dcHeros)

const newAllHeros = [...marvelHeros, ...dcHeros];

const nestedArrays = [1,2,3,[4,5],6,7,[8,9,[7,6,[5,4],5,4]]];

const flatArr = nestedArrays.flat(3)

// console.log(flatArr)

// console.log(Array.isArray("hassan ali"))

// console.log(Array.from("hassan ali"))

console.log(Array.from({name : "Hassan"}))

const student1 = [80,70,88]
const student2 = [75,70,68]
const student3 = [85,90,83]

console.log(Array.of(student1,student2,student3))