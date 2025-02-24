const user = {
  userName : "Hassan ali",
  price : 999,

  welcomeMessage : function (){
    console.log(`${this.userName}, Welcome to our website,`);
    // console.log(this)  // refer to current parent context {user}
  }
}

// user.welcomeMessage()

user.userName = "Abdul Rehman"

// user.welcomeMessage()

// console.log( this )

function chai(){
  console.log(this)
}

// chai()

const chaiArrow = () =>{
  console.log(this)
}
chaiArrow()


const arrowFunc = (num1,num2) =>{
  return num1 + num2
}

console.log(arrowFunc(6,8))



const newArrowFunc = (num1,num2) => (num1 + num2)

console.log(newArrowFunc(5,5))
