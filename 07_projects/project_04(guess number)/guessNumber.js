const value = Math.floor(Math.random() * 100 + 1);
console.log(value);

const container = document.querySelector(".container");

const userInput = document.querySelector("#user_input");

const userGuesses = document.querySelector("#user_guesses");
const userAttempts = [];
const gameBtn = document.querySelector("#game_Btn");
const guessMessage = document.querySelector(".guess_message");

let initialValueOfGuess = 1;

const valueToGuess = document.querySelector(".value_to_guess");
const gameCoin = true;

if (gameCoin) {
  gameBtn.innerHTML = "End Game";

  const check = document.querySelector("form");
  check.addEventListener(
    "submit",
    (e) => {
      // console.log("check")
      e.preventDefault();
      const guess = parseInt(userInput.value);
      userInput.value = "";
      if (isNaN(guess)) {
        console.log("if block");
        // alert("kindly guess the value between 1 to 100");
        return;
      } else {
        attempRemains(guess);
      }
    },
    false
  );
} else{}

function attempRemains(guess) {
  if (initialValueOfGuess >= 3 && guess !== value) {
    // userInput.setAttribute("", "disable");
    console.log(userInput);
    container.innerHTML  =`<h2 style="text-align : center;">Game Over</h2>`

    return;
  } else if (initialValueOfGuess >= 3 && guess === value) {
    console.log("jjjj");
        checkUserGuess(guess);

  } else {
    checkUserGuess(guess);

    userAttempts.push(guess);
    userGuesses.innerHTML = userAttempts;

    initialValueOfGuess++;
  }
}

function checkUserGuess(guess) {
  if (guess === value) {
    guessMessage.innerHTML = "Congratulations! you have guess it correct.";
    valueToGuess.innerHTML = guess
    console.log(userInput)
    userInput.setAttribute("disable",'')
  } else if (guess < value) {
    guessMessage.innerHTML = `${guess} is tooo low`;
  } else if (guess > value) {
    guessMessage.innerHTML = `${guess} is tooo high`;
  }
}

const endGame = () =>{
  
}