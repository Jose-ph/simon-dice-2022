

const $board = document.querySelector("#board");

const $startButton = document.querySelector("#btn-start");

    let machineColors = [];
    let playerColors = [];
    let machineTurn = true;


$startButton.onclick = function (){


    handleMachineTurn();

    handlePlayerTurn();

    setTimeout(() => {

        compareColors(playerColors,machineColors)

        if( !compareColors(playerColors,machineColors)){

            alert("No hay coincidencia, tu pierdes!");
        }

        else {

            alert("Hay coincidencia, sigue el juego !");
        }
        
    }, 5000);
    



}


function handlePlayerTurn(){

    const $colours = document.querySelectorAll('.colour');

    let arrayOfColours = Array.from($colours)

    arrayOfColours.forEach((color) => {

        color.onclick = function(event){

           let newPlayerColor =  getPlayerColor(event);
            console.log(newPlayerColor);
            playerColors.push(newPlayerColor);
            highlightColour(newPlayerColor);
            

            
        }
        
    });
   


}


function handleMachineTurn(){

    const $colours = document.querySelectorAll('.colour');
      
     let randomColor = getRandomColour($colours);

     

        machineColors.push(randomColor);

        highlightColourWithDelay(machineColors);

        machineTurn= false;




}

function compareColors (playerColors,machineColors){

    //la omparación debe ser posición por posicin
    let match= false


    machineColors.forEach((color,i) => {

        if( color === playerColors[i]){

            match = true;
        }
        
        else { match= false}
    });

/*     for(let i = 0 ; i <machineColors.length; i++){

       if( machineColors.find(color => color === playerColors[i])){

            match = true;

       }
        
       else {

            match = false
       }
       

       console.log(match);

    } */


    return match;



}

function getPlayerColor(e){

    

    let playerColor= e.target

    return playerColor;
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
