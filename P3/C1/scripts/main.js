/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

let playerInput = document.getElementById("inputEcriture")

let validateButton = document.getElementById("btnValiderMot")

let zoneSaisie = document.querySelector(".zoneProposition")

let zoneScore = document.querySelector(".zoneScore span")

let buttons = document.querySelectorAll("input[type=radio]")

console.log(playerInput)
console.log(validateButton)
console.log(zoneSaisie)
console.log(zoneScore)
console.log(buttons)

lancerJeu()