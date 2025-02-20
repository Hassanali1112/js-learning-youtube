var a = 300;
let b = 400;
const c = 600;

{
  var a = 30;
  let b = 40;
  const c = 60;

  console.log(" at line 10 a : ", a, " b : ", b, " c : ", c);

}

console.log("at line 14 a : " , a , " b : " , b , " c : " , c);