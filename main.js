

const $board = document.querySelector("#board");

const $startButton = document.querySelector("#btn-start");

    let machineColors = [];
    let playerColors = [];
    let machineTurn = true;


$startButton.onclick = function (){


    handleMachineTurn();

    handlePlayerTurn();

   // setTimeout(() => {

        

       // console.log(compareColors(playerColors,machineColors));

       /*  if( !compareColors(playerColors,machineColors)){

            alert("No hay coincidencia, tu pierdes!");
        }

        else {

            alert("Hay coincidencia, sigue el juego !");
        } */
        
        //   }, 10000);
    



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

            //comparar colores y luego eliminar el array con la jugada 

            setTimeout(() => {

                let match = compareColors(playerColors,machineColors);

                if(match === true){

                    handleMachineTurn()
                    handlePlayerTurn();
                    playerColors = []
                }

                if ( match === false){

                    alert("perdiste!")
                    playerColors= []
                    machineColors = [];

                    alert("toca el bot+on comenzar para volver a jugar")
                }

                
               // compareColors(playerColors,machineColors)

              /*   if(compareColors(playerColors,machineColors)){

                    playerColors= []
                    handleMachineTurn();
                    handlePlayerTurn();

                }

                if(!compareColors(playerColors,machineColors)){


                    alert("perdiste el juego!")
                    playerColors = []
                } */


               
                
            }, 5000);
           
        }
        
    });
   


}


function handleMachineTurn(){

    const $colours = document.querySelectorAll('.colour');
      
     let randomColor = getRandomColour($colours);

     //bloquear al jugador

        machineColors.push(randomColor);

        highlightColourWithDelay(machineColors);

        machineTurn= false;




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
   
function compareColors(playerColors,machineColors){

    let match;


    for(let i= 0 ; i < playerColors.length; i++){

        if(playerColors[i].id === machineColors[i].id){

            match = true;

        }


        else if(playerColors[i].id !== machineColors[i].id ){

            match = false;
            break;

        }


    }


    return match

}

   
/* function compareColors(userColors,machineColors){

    if(userColors.length != 0){

    for(let i=0 ; i<userColors.length; i++){


        if(userColors[i].id === machineColors[i].id){

            return true;
        }

        else if(userColors[i].id !== machineColors[i].id){

            return false;
            break;
        }

        
       
    }

    }

    else return 'empty parameter'

} */

/* 
function compareColors (playerColors,machineColors){

    //la comparación debe ser posición por posicion
    let matches = false

  machineColors.forEach((color,i) => {

        if( color === playerColors[i]){

            matches = true;
        }
        
      
    });




    //return match;

 

    return matches;
} */