

const $board = document.querySelector("#board");

const $startButton = document.querySelector("#btn-start");

const $gameState = document.querySelector("#state-heading");

$gameState.textContent = "Toca Comenzar para Jugar!!"


let machineColors = [];
let playerColors = [];

$startButton.onclick = function () {

  $gameState.textContent = "Repite la secuencia!"

  handleRound();
};

function handleRound() {

  lockPlayerClick();

  handleMachineTurn();

  highlightColourWithDelay(machineColors);

  let playerDelay = (machineColors.length + 1) * 1000;
  

  setTimeout(() => {
    console.log("podes jugar!");

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
    color.onclick = function () {
      console.log("aun no es tu turno");
    };
  });
}

function handlePlayerTurn(e) {
  let newPlayerColor = e.target;

  playerColors.push(newPlayerColor);

  highlightColour(newPlayerColor);
  console.log(playerColors);

  let match = checkPlayerSelection(newPlayerColor);
  

  if (machineColors.length === playerColors.length && match) {
    playerColors = [];
    handleRound();
  }

  if (match === false) {

    $gameState.textContent = "Perdiste, toca Comenzar para volver a Jugar!"
    lockPlayerClick()
    playerColors = [];
    machineColors = [];
    alert("perdiste");
  }
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

  let delay = (secuence.length) * 1000;

  for (let i = 0; i < secuence.length; i++) {
    setTimeout(() => {
      highlightColour(secuence[i]);
      console.log("cambia color");

      console.log("Delay colores:",delay);
    }, delay);

     delay += 1000; 
    
  }

  
}


