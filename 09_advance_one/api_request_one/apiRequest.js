const buttonElem = document.createElement("button");

buttonElem.textContent = "Api Request";

buttonElem.setAttribute("id", "apiRequestBtn");

document.body.appendChild(buttonElem);

const apiRequestBtn = document.querySelector("#apiRequestBtn");
apiRequestBtn.addEventListener("click", () => {
  const url = "https://api.github.com/users/hassanali1112";
  const request = new XMLHttpRequest();
  request.open("get", url);
  //  console.log(request.readyState)
  request.send();

  request.onreadystatechange = function () {
    console.log(request.readyState);
    if (request.readyState === 4) {
      console.log(request.response);
    }
  };



});
