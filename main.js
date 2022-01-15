const $board = document.querySelector("#board");

const $startButton = document.querySelector("#btn-start");

const $gameState = document.querySelector("#state-heading");

$gameState.textContent = "Repite la secuencia, toca Comenzar para jugar!!";

let machineColors = [];
let playerColors = [];

$startButton.onclick = function () {
  $gameState.textContent = "Turno de la máquina!!";
  $startButton.disabled = true;

  handleRound();
};

function handleRound() {

  lockPlayerClick();

  handleMachineTurn();

 

  let playerDelay = (machineColors.length +1) *1000;

  setTimeout(() => {
    $gameState.textContent = "Es tu turno!";

    unlockPlayerClick();
  }, playerDelay);
}

function unlockPlayerClick(e) {
  const $colours = document.querySelectorAll(".colour");

  let arrayOfColours = Array.from($colours);

  arrayOfColours.forEach((color) => {
    color.onclick = function (e) {
      handlePlayerTurn(e);
    };
  });
}

function lockPlayerClick() {
  const $colours = document.querySelectorAll(".colour");

  let arrayOfColours = Array.from($colours);

  arrayOfColours.forEach((color) => {
    color.onclick = function () {};
  });
}

function handlePlayerTurn(e) {
  let newPlayerColor = e.target;

  playerColors.push(newPlayerColor);

  highlightColour(newPlayerColor);

  let match = checkPlayerSelection(newPlayerColor);

  if (machineColors.length === playerColors.length && match) {
    $gameState.textContent = "Turno de la máquina!!";
    playerColors = [];
    handleRound();
  }

  if (match === false) {
    gameOver();
  }
}

function gameOver() {
  $gameState.textContent = "Perdiste, toca Comenzar para volver a Jugar!";
  $startButton.disabled = false;
  lockPlayerClick();
  playerColors = [];
  machineColors = [];
}

function checkPlayerSelection(selection) {
  let match = true;

  /* Cuando playerColors.length por ejemplo sea 1 verificará el elemento que esté en 
    la posicio+on [0] en machineColors */

  if (machineColors[playerColors.length - 1].id !== selection.id) match = false;

  return match;
}

function handleMachineTurn() {
  const $colours = document.querySelectorAll(".colour");

  let randomColor = getRandomColour($colours);

  machineColors.push(randomColor);
 
    
   highlightColourWithDelay();
 
  //highlightColour(randomColor);

  return machineColors;
}

function getRandomColour(colours) {
  let randomIndex = Math.floor(Math.random() * 4);

  return colours[randomIndex];
}

function highlightColour(color) {
  color.style.opacity = 1;

  setTimeout(() => {
    color.style.opacity = 0.5;
  }, 500);
}

function highlightColourWithDelay(secuence) {



  machineColors.forEach((color,index) => {

    let delay = (index+1)*1000;

    setTimeout(() => {
      highlightColour(color);
    }, delay);
     
   });

  }
