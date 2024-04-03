let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const msgcon = document.querySelector(".msg-container")
const userScorePera=document.querySelector("#user-score")
const compScorepara=document.querySelector("#comp-score")

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};
const drawGame = () => {
  console.log("Game Was Draw");
  msg.innerText = "Game Was Draw,Play Again"
  msg.style.backgroundColor = "pink"
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePera.innerText=userScore
    console.log("You Win")
    msg.innerText = `You Win. ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green"
  } else {
    computerScore++;
    compScorepara.innerText=computerScore
    console.log("You lose")
    msg.innerText = `You lost. ${compChoice} beats ${userChoice}`
    msg.style.backgroundColor = "red"
  }

}

const playgame = (Userchoice) => {
  console.log("User Choice: ", Userchoice);
  // generate computer choice
  const compChoice = genCompChoice();
  console.log("Computer Choice: ", compChoice);
  if (Userchoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (Userchoice === "rock") {
      // comp choice can be scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (Userchoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    }
    showWinner(userWin, Userchoice,compChoice)
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice was clicked")
    playgame(userChoice);
  });
});
