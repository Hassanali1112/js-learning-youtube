// the way the data is store and access it is divided in two catagories 

// primitive data type

const score = 100;
console.log(typeof score);

const scoreValue = "100.3";
console.log(typeof scoreValue);

const outSideTemp = null;
console.log(typeof outSideTemp);

const isLoggedIn = false;
console.log(typeof isLoggedIn)

let userEmail;
console.log(typeof userEmail);

const id = Symbol("123");
console.log(typeof id);

const otherId = Symbol("123");
console.log(id === otherId)

const bigNumber = 16399997773366n;
console.log(typeof bigNumber)


// Non-primitive (reference) data type

const heros = ["Salah-ud-deen", "Tariq-bin-ziad", "Muhammad-bin-qasim"];
console.log(typeof heros);

let myObj = {
    name : "hassan ali",
    age : 28,
};
console.log(myObj);

const myFunc = function(){
    console.log("hello world");
}
console.log(typeof myFunc)