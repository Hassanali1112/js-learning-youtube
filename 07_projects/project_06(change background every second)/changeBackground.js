const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const body = document.querySelector("body");

// _____________________________________________  recommended approach __________________________________________________

const generateHexCode = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(generateHexCode());

let bgInterval;
startButton.addEventListener(
  "click",
  () => {
    if (!bgInterval) {
      console.log(bgInterval)
      bgInterval = setInterval(() => {
        body.style.backgroundColor = `${generateHexCode()}`;
      }, 1000);
    }
    
  },
  false
);

stopButton.addEventListener(
  "click",
  () => {
    if (bgInterval) {
      Swal.fire({
        title: "Are you sure to stop it?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, stop it!",
      }).then((result) => {
        if (result.isConfirmed) {
          clearInterval(bgInterval);
          body.style.backgroundColor = `black`;
          bgInterval = null;
          Swal.fire({
            title: "stopped",
            text: "background change has been stopped",
            icon: "success",
          });
        }
      });
    } else {
      Swal.fire({
        title: "No Background found",
        text: "Do you want to start it?",
        icon: "error",
        confirmButtonColor: "green",
        confirmButtonText: "Yes, start it!",
      }).then((result) => {
        if (result.isConfirmed) {
          startButton.click();
        }
      });
    }
  },
  false
);

// _________________________________________________________ my approach __________________________________________________
// const generateHexCode = () =>{
//     let hex = Math.round(Math.random() * 256 + 1);
//     return hex

// }

// let  bgInterval;
//   startButton.addEventListener("click",()=>{
//     bgInterval = setInterval(() => {
//       body.style.backgroundColor = `rgb(${generateHexCode()},${generateHexCode()},${generateHexCode()})`;
//     }, 1000);
//   },false)

//   stopButton.addEventListener("click",()=>{
//     if(bgInterval){
//       Swal.fire({
//         title: "Are you sure to stop it?",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, stop it!",
//       }).then((result) => {
//         if (result.isConfirmed) {
//       clearInterval(bgInterval);
//       body.style.backgroundColor = `black`;
//           Swal.fire({
//             title: "stopped",
//             text: "background change has been stopped",
//             icon: "success",
//           });
//         }
//       });
//     } else{
//       Swal.fire({
//         title: "No Background?",
//         text: "kindly press start button first?",
//         icon: "error",
//       });
//     }
//   },false)
