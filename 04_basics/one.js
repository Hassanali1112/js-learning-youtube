if (true) {
  console.log(" Hassan ali ");
}

if (false) {
  console.log("This is false")
}

if( 2 == "2"){
  console.log("executed")
}

const temperature = 25;

if(temperature < 15){
  console.log("Less than 15")
} else if( temperature < 20 ){
  console.log("less than 20")
} else if(temperature < 25){
  console.log("Less than 25")
} else {
  console.log("condition matched")
}


const score = 200

if(score >= 100){
  let power = "run"
  console.log(power)
};
  // console.log(power);


  const balance = 1000;

  if(balance >  500 ) console.log(balance)

  if(balance >  500 ) console.log(balance), console.log("checking") // alowed but 



let userLoggedIn = true;
let debitCard = true;

if( userLoggedIn && debitCard){
  console.log("allowed to buy")
}

let loggedInFfromgoogle = false;
let loggedInFromEmail = true;

if(loggedInFfromgoogle || loggedInFromEmail){
  console.log("user logged in")
}