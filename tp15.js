let tailleList = parseInt(prompt("Saisissez la taille de votre liste"));
let premierlist = [];
let deuxiemeList = [];
let troisiemeList = [];

for (let i = 0; i < tailleList; i++) {
  premierlist[i] = parseInt(prompt("saisez les nombres de la premiére liste"));
}

for (i = 0; i < tailleList; i++) {
  deuxiemeList[i] = parseInt(prompt("saisez les nombres de la deuxieme liste"));
}
for (i = 0; i < tailleList; i++) {
  troisiemeList[i] = premierlist[i] + deuxiemeList[i];
}
for (i = 0; i < tailleList; i++) {
  alert(troisiemeList[i]);
}
