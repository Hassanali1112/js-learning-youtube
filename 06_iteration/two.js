// let i = 2;

// while(i <= 10){
//   let j = 1;
//   while(j <= 10){
//     console.log(`${i} X ${j} = ${j * i}`)
//     j++
//   }
//   i++
// }

const arr = ["Taimoor","Hassan Ali","Abdul Rehman","Zeeshan","Faizan"] 
let name = 0;
// while(name < arr.length){
//   if(arr[name] === "Hassan Ali"){
//     console.log(`welcomm ${arr[name]}`)
  
//   } else{

//   console.log( `${arr[name]} your brother `)

//   }
//   name++;
// }


do{
  console.log(name)
  if(arr[name] === "Hassan Ali"){
    console.log(`welcome ${arr[name]}`)
  } else{

    console.log(`brother ${ arr[name]}`)
  }
  name++
} while(name < arr.length)

  for(let i of arr){
    console.log(i);
    
    if(i === "Hassan Ali"){
      console.log(`welcome ${i}`)
    } else {
      console.log(`brother ${i}`);

    }
  }

  const newNames = {
    1 : "Taimoor",
    2 : "Hassan Ali",
    3 : "Abdul Rehan",
    4 : "Zeeshan",
    5 : "Faizan"
    }

    for(i in newNames){
      console.log(i + " "+ newNames[i])
    }