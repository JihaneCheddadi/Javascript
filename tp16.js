let tailleMatrice = parseInt(
  prompt("Saisissez la taille de votre matrice carée")
);
let somme = 0;

let matrice = [];
for (let i = 0; i < tailleMatrice; i++) {
  matrice[i] = [];
}

for (let i = 0; i < tailleMatrice; i++) {
  for (let j = 0; j < tailleMatrice; j++) {
    matrice[i][j] = parseInt(prompt("Saissez les nombres "));
  }
}

for (let i = 0; i < tailleMatrice; i++) {
  somme += matrice[i][i];
}

alert(`la somme de la diagonale ${somme}`);
