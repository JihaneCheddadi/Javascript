let tab = [];
let somme = 0;
for (i = 0; i < 10; i++) {
  tab[i] = parseInt(prompt("saisez les nombres "));
}
for (i = 0; i < 10; i++) {
  somme = somme + tab[i];
}

alert(`Somme est ${somme}`);
