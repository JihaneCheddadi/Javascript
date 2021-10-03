let tailleMatrice = parseInt(prompt("Saisissez la taille de votre matrice"));
let somme = 0;
let somme2 = 0;
while (tailleMatrice % 2 != 0) {
  if (tailleMatrice % 2 != 0) {
    alert("Saisissez un nombre pour que la matrice soit carée");
    tailleMatrice = parseInt(prompt("Saisissez la taille de votre matrice"));
  }
}
alert("Taille matrice correcte");

let matrice = [];
for (let i = 0; i < tailleMatrice; i++) {
  matrice[i] = [];
}

for (let i = 0; i < tailleMatrice; i++) {
  for (let j = 0; j < tailleMatrice; j++) {
    matrice[i][j] = parseInt(prompt("saisez les nombres "));
  }
}

for (let i = 0; i < tailleMatrice; i++) {
  somme += matrice[i][i];
  somme2 += matrice[i][matrice.length - i - 1];
}

alert(somme + somme2);
