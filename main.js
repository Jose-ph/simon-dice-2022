

const $board = document.querySelector("#board");

const $startButton = document.querySelector("#btn-start");

    let machineColors = [];
    let playerColors = [];



$startButton.onclick = function (){


const $colours = document.querySelectorAll('.colour');
      
   let randomColor = getRandomColour($colours);

   machineColors.push(randomColor);


    let timeBeforeNextHighlight = machineColors.length *1000
    console.log(timeBeforeNextHighlight);

 

    highlightColour(randomColor);


    



}

function getRandomColour(colours){

    let randomIndex = Math.floor(Math.random()*(4) );

    

     return colours[randomIndex]



}

function highlightColour (color){

    color.style.opacity = 1;

    setTimeout(() => {
        color.style.opacity = 0.5;
        
    }, 500);


    

}


   
function highlightColourWithDelay(secuence){


    let delay = secuence.length +1 * 1000;


    for( let i = 0 ; i<secuence.length; i++){

        setTimeout(() => {
            highlightColour(secuence[i])
            console.log("cambia color")

        }, delay);
        
        delay+=1000

    }



}
