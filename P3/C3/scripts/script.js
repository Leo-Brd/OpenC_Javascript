/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}` 
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
}

function afficherProposition(mot){
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.textContent = mot
}



/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    let score = 0

    let i = 0
    afficherProposition(listeMots[i])

    let inputEcriture = document.getElementById("inputEcriture")
    let validateButton = document.getElementById("btnValiderMot")
    validateButton.addEventListener("click", () => {
        console.log(inputEcriture.value)
        if (inputEcriture.value === listeMots[i]){
            score ++
        }
        inputEcriture.value = ""
        i ++
        afficherResultat(score, i)
        if (listeMots[i] === undefined){
            validateButton.disabled = true
            afficherProposition("Le jeu est fini")
            return;
        }
        afficherProposition(listeMots[i])
    })

    afficherResultat(score, i)
}