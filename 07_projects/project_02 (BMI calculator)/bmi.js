const form = document.querySelector(".form-elem");
const resultElem = document.querySelector(".result");

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  
  const heightinp = parseFloat(document.querySelector("#height").value);
  const weightinp = parseFloat(document.querySelector("#weight").value);

  if(heightinp == "" || heightinp < 0 || isNaN(heightinp)){
    console.log("Enter a valid height")
  }else if(weightinp == "" || weightinp < 0 || isNaN(weightinp)){
    console.log("Enter a valid weight");
  } else{
    const bmi = (weightinp / (heightinp * heightinp))
    resultElem.innerText = bmi.toFixed(2)
  }

})