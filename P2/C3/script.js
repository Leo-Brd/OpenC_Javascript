
// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
const listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"];
let choix = "";
let score = 0;
let listeSelected;

while ((choix !== "mots") && (choix !== "phrases")) {
    choix = prompt("Tapez 'mots' ou 'phrases' pour choisir le type d'exercice.");
}

if (choix === "mots") {
    listeSelected = listeMots;
} else {
    listeSelected = listePhrases;
}

for (let i = 0; i < 3; i++) {
    let motUtilisateur = prompt('Entrez le mot : ' + listeSelected[i]);
    if (motUtilisateur === listeSelected[i]) {
        score++;
    }
}

// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3");
