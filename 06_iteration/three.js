const newMap = new Map();

newMap.set("pk","Pakistan")
// newMap.set("pk","Pakistan") // can't be repeat, it remember order
newMap.set("uk","United Kindom")

// console.log(newMap)

for(const [key,value] of newMap){
  console.log(`${key} :=> ${value}`)
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }