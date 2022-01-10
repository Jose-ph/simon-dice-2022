

const $board = document.querySelector("#board");

const $startButton = document.querySelector("#btn-start");


$startButton.onclick = function (){


    const $colours = document.querySelectorAll('.colour');


    $colours.forEach((colour) => {

        colour.onclick = function(e){

            checkClickedButton(e);
        }
        
    });
    








}




function checkClickedButton(e){ //cambiarNombreDeLaFuncion


    console.log(e.target);

    e.target.classList.add("addFade");
    
    setTimeout(() => {

        e.target.classList.remove("addFade");
        
    }, 2000);


}