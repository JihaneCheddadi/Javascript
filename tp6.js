let nmbrSaissi = parseInt(prompt("Saisissez un nombre"));
while (nmbrSaissi < 1 || nmbrSaissi > 3) {
  if (nmbrSaissi < 1 || nmbrSaissi > 3) {
    alert("Saisissez un autre nombre");
    nmbrSaissi = parseInt(prompt("Saisissez un nombre"));
  }
}
if (nmbrSaissi >= 1 || nmbrSaissi <= 3) {
  alert("Bravo!!! Vous avez saissi le bon nombre");
}
