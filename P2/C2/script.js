
const listeMots = ["Cachalot", "Pétunia", "Serviette"];

let score = 0;

const motUser = prompt("Entrez le mot : " + listeMots[0])

let affichage = "";

if (motUser === listeMots[0]){
    score ++;
    affichage += `Mot correct, voici votre score : ${score}`
    console.log(affichage);
}

const motUser_2 = prompt("Entrez le mot : " + listeMots[1])

affichage = "";

if (motUser_2 === listeMots[1]){
    score ++;
    affichage += `Mot correct, voici votre score : ${score}`
    console.log(affichage);
}

const motUser_3 = prompt("Entrez le mot : " + listeMots[2])

affichage = "";

if (motUser_3 === listeMots[2]){
    score ++;
    affichage += `Mot correct, voici votre score : ${score}`
    console.log(affichage);
}