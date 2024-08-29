let yourScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const winnerShow = (userWin, userChoice, compChoice) => {
  if (userWin) {
    winIndicator(userChoice, compChoice);
  } else {
    loseIndicator(userChoice, compChoice);
  }
};

const getcompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randNum = Math.floor(Math.random() * 3);
  return option[randNum];
};

const playGame = (userChoice) => {
  const compChoice = getcompChoice();
  if (userChoice === compChoice) {
    drawIndicator();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //compchoice is paper or scissors//
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    winnerShow(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const winIndicator = (userChoice, compChoice) => {
  console.log("Win");
  yourScore++;
  document.querySelector("#user").innerText = yourScore;
  msg.innerText = `Hurry! You win the game. ${userChoice} beats ${compChoice}. `;
  msg.style.backgroundColor = "green";
};
const loseIndicator = (userChoice, compChoice) => {
  console.log("lose");
  compScore++;
  document.querySelector("#comp").innerText = compScore;
  msg.innerText = `You lost! ${compChoice} beats ${userChoice}.`;
  msg.style.backgroundColor = "red";
};
const drawIndicator = (userChoice, compChoice) => {
  console.log("The game is draw");
  msg.innerText = `Draw! Try again.`;
  msg.style.backgroundColor = "navy";
};
