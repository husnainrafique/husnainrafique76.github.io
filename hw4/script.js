let wins = 0;

let losses = 0;

let ties = 0;

const choices = ["rock", "paper", "scissors"];

const computerImage = document.getElementById("computer-image");

const resultDisplay = document.getElementById("result");

const winsDisplay = document.getElementById("wins");

const lossesDisplay = document.getElementById("losses");

const tiesDisplay = document.getElementById("ties");

const resetButton = document.getElementById("reset");

document.querySelectorAll(".choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    handlePlayerChoice(choice.id);
  });
});

resetButton.addEventListener("click", resetGame);

function handlePlayerChoice(playerChoice) {
  document.querySelectorAll(".choice").forEach((choice) => {
    choice.classList.remove("selected");
  });

  document.getElementById(playerChoice).classList.add("selected");

  computerPlay(playerChoice);
}

function computerPlay(playerChoice) {
  let computerChoice = "";

  computerImage.src = "question-mark.png";

  let shuffleInterval = setInterval(() => {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

    computerImage.src = `${computerChoice}.png`;
  }, 500);

  setTimeout(() => {
    clearInterval(shuffleInterval);

    determineWinner(playerChoice, computerChoice);
  }, 3000);
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    resultDisplay.textContent = "It's a tie!";

    ties++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultDisplay.textContent = "You win!";

    wins++;
  } else {
    resultDisplay.textContent = "You lose!";

    losses++;
  }

  updateScore();
}

function updateScore() {
  winsDisplay.textContent = `Wins: ${wins}`;

  lossesDisplay.textContent = `Losses: ${losses}`;

  tiesDisplay.textContent = `Ties: ${ties}`;
}

function resetGame() {
  wins = 0;

  losses = 0;

  ties = 0;

  resultDisplay.textContent = "Make your choice!";

  updateScore();

  document.querySelectorAll(".choice").forEach((choice) => {
    choice.classList.remove("selected");
  });

  computerImage.src = "question-mark.png";
}
