const digitalClock = document.querySelector(".clock");

setInterval(()=>{

let now = new Date();

digitalClock.innerHTML = `<span>${now.toLocaleTimeString()}</span>`;

},1000)