function randomNum() {
  let randomNo = parseInt(Math.random(0, 100) * 100 + 1);
  return randomNo;
}

let randomNumber = randomNum();
const submitBtn = document.querySelector("#sumbit");
const userInput = document.querySelector("#guessId");
// console.log(userInput);

const userPreviousGuess = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParse");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number between range 1 to  100");
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`You guessed it right.`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Low.`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High.`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  userPreviousGuess.innerHTML += `${guess}, `;
  numGuess += 1;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h3 id = "new-game">Start New Game</h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameBtn = document.querySelector("#new-game");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = randomNum();
    prevGuess = [];
    numGuess = 1;
    userPreviousGuess.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.remove(p);
    playGame = true;
  });
}
