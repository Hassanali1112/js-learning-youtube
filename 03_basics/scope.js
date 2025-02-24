var a = 300;
let b = 400;
const c = 600;

{
  var a = 30;
  let b = 40;
  const c = 60;

  // console.log(" at line 10 a : ", a, " b : ", b, " c : ", c);

}

// console.log("at line 14 a : " , a , " b : " , b , " c : " , c);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
  const studentName = "Hassan Ali ";

  function two (){
    const trainer = "Hitesh"
    const source = "Youtube"

    console.log(studentName  + trainer)
  }
  // console.log(source)
  two()

}

// one()

const studentName = "Hassan Ali "

if(studentName){
  const trainerName = "Hitesh";
  if(trainerName){
    const source = "Youtube.com";
    console.log(`Name ${studentName}, trainer ${trainerName} and source is ${source}`)
  }

  // console.log(source)
}
// console.log(trainerName)

// +++++++++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne (num){
  return num + 1;
}

// function Expression

// console.log(addTwo(5))
const addTwo = function(num){
  return num + 2;
}

// this can't be access before initialization