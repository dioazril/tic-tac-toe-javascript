// edited player from edit player button
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

//get element from backdrop
const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const playerWarningOverlayElement = document.getElementById("warning-overlay");
const activePlayerNameElement = document.getElementById("active-player-name");
const playerWarningFieldElement = document.getElementById("warning-field");
const gameOverElement = document.getElementById("game-over");

//show error warnings when player getting wrong input
const configErrorElement = document.getElementById("config-errors");

//get form element data
const formElement = document.querySelector("form");
formElement.addEventListener("submit", savePlayerConfig);
const gameBoardElement = document.getElementById("game-board");

// loop li elements
// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }
gameBoardElement.addEventListener("click", selectGameField);

//Player Button Edit
const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
//Start Game Button
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");

//Start Game event listener
startNewGameBtnElement.addEventListener("click", startNewGame);

//function from config.js
editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
playerWarningFieldElement.addEventListener("click", warningField);

//Player Cancel Button
const cancelPlayerBtnElement = document.getElementById("cancel-config-button");
cancelPlayerBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
