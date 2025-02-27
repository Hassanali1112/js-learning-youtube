
// executed
if(2 == "2"){
  console.log("condition passed")
}

// not executed because false
if(2 == "2"){
  console.log("condition passed")
}

const temperature = 43;

if(temperature > 40){
  console.log("It's too hot"); 
} else{
  console.log("it's hot");
  
}

let score = 200;

if(score >= 100){
  let power = "swim";
  console.log(power);
  
}
  // console.log(power);

  let balance = 1000;

  if(balance >= 500 ) console.log("eligible to purchase!")

    // multiple condition testing

    if(balance < 300){
      console.log("balance is less than 300");
    } else if( balance < 600 ) {
      console.log("balance is less than 600");
    } else if( balance < 900 ){
      console.log("balance is less than 900");
    } else{
      console.log("balance is less than 1200");
    }

    const userLoggedIn = true;
    const hasDebitCard = true;

    if(userLoggedIn && hasDebitCard && balance >= 1000){
      console.log(" welcome, you can buy")
    }

    const loggedInFromGoogle = true;
    const loggedInfromEmail = false;

    if(loggedInFromGoogle || loggedInfromEmail){
      console.log("you're loggedIn ")
    }
    