const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

buttons.forEach( (button) => {
  button.addEventListener("click",(e)=>{
    switch (e.target.id) {
      case "gray":
        body.style.backgroundColor = e.target.id
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id
        break;
      case "green":
        body.style.backgroundColor = e.target.id
        break;
      case "orange":
        body.style.backgroundColor = e.target.id
        break;
    
      default:
        break;
    }
  })
})