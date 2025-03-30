const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("data from promise one");
    resolve();
  }, 2000);
});

promiseOne
  .then(() => {
    console.log("promise one");
  })
  .catch((error) => console.log(error));

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("data from promise two ");
    resolve("promise two resolved successfully");
  }, 2000);
});

promiseTwo
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("data from promise three ");
    resolve({
      name: "Hassan ali",
      course: "Web and App Development",
    });
  }, 2000);
});

promiseThree
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));

const stringData = JSON.stringify({
  name: "Hassan ali",
  course: "Web and App Development",
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("data from promise four ");
    resolve(stringData);
  }, 2000);
});

promiseFour
  .then((res) => {
    return JSON.parse(res);
  })
  .then((data) => console.log("json data : ", data))
  .catch((error) => console.log(error));

const promiseFive = new Promise((resolve, reject) => {
  let error = true;
  setTimeout(() => {
    if (!error) {
      resolve("resolved data");
    } else {
      reject("some thing went wrong");
    }
  }, 2000);
});

promiseFive
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

  // fetch api

  // with async await 

//   async function getAllData (){
//     try {
//       const response = await fetch("https://dummyjson.com/users");
//       const data = await response.json();
//       if(data) console.log(data)
//         // if(error) throw error;
//     } catch (error) {
//       console.log(error)
//     }
//   }

//  ( ()=>{
//   getAllData();
//  } )()


// with fetch

function callData (){
   fetch("https://dummyjson.com/users")
     .then((response) => response.json())
     .then((data) => console.log(data.users))
     .catch((error) => console.log(error));
}

(()=>{ callData()})()