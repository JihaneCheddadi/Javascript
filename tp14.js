let tab = [];
let nmbrPetit = 0;
let nmbrGrand = 0;

for (i = 0; i < 5; i++) {
  tab[i] = parseInt(prompt("saisez les nombres "));
}

for (i = 0; i < 4; i++) {
  if (tab[i] > tab[i + 1]) {
    nmbrGrand = tab[i];
  } else if (tab[i] < tab[i + 1]) {
    nmbrPetit = tab[i];
  }
}
alert(
  `le plus grand nombre est :${nmbrGrand} et le plus petit nombre est :${nmbrPetit}`
);
