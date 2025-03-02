for (let index = 0; index < 10; index++) {
  // console.log(index)
  
}

for(let j = 0; j < 8; j++){ 
  if(j === 6){
    // break
    continue
    console.log(`matched Case`+j)
  }
  console.log(j);

}

for(let i =2; i <= 10;  i++) {
    for(j=1; j <= 10; j++){
      console.log(`${i} X ${j} = ${i * j}`)
    }
}

const arr = ["Taimoor", "Abdul Rehman", "Zeeshan", "Faizan", "Hassan Ali"];

for(let i = 0; i < arr.length; i++){
  if(arr[i]=== "Hassan Ali"){
    console.log(`welcome ${arr[i]}`)
    continue
  }
  console.log(`${i+1} brother ${arr[i]}`)
}