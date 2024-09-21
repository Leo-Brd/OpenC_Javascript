

let score = 0

function afficherResultat(resultat, nbMots){
    console.log("Votre score est de " + resultat + " sur " + nbMots);
}

function choisirPhrasesOuMots(){
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix;
}

function lancerBoucleDeJeu(tab){
    for (let i = 0; i < tab.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + tab[i])
        if (motUtilisateur === tab[i]) {
            score++
        }
    }
    return score;
}

function lancerJeu(){
    let choix = choisirPhrasesOuMots();

    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots);
        afficherResultat(score,listeMots.length);
    } else {
        score = lancerBoucleDeJeu(listePhrases);
        afficherResultat(score,listePhrases.length);
    }
}


