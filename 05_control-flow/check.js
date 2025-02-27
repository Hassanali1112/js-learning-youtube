const dataArr = []

if(dataArr.length === 0){
  console.log("Empty array");
}

const dataObj = {}

if(Object.keys(dataObj).length === 0){
  console.log("Empty object")
}

// nullish coalescing operator ??

const res = 60 ?? 300;
console.log(res)

const TerData = 20;

TerData >= 15 ? console.log("greater") : console.log("less");