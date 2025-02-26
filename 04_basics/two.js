// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

const month = "march";

switch (month) {
  case "jan":
    console.log('line 14')
    break;
  case "feb":
    console.log('line 17')
    break;
  case "march":
    console.log('line 20')
    break;
  case "april":
    console.log('line 23')
    break;

  default:
    console.log("default")
    break;
}

// truthy and falsy 

const user = []

if(user.length){ //false
  console.log("user empthy line 36")
}

if(user){ // true
  console.log("user empthy line 40")
}


const userObj = {}

if(Object.keys(userObj).length){ // false
  console.log("empty object 47")
}

if(userObj){
  console.log("empty object 51");

}